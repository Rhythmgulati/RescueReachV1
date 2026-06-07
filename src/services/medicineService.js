// src/services/medicineService.js
import { checkInternet } from '../utils/network.js';
import Constants from 'expo-constants';

// Get API key from Expo extra config (stored securely via EAS Build)
const GEMINI_API_KEY = Constants.expoConfig?.extra?.geminiApiKey || process.env.GEMINI_API_KEY || '';

// Validate API key early
if (!GEMINI_API_KEY) {
  console.warn('⚠️ Gemini API key not configured. Add geminiApiKey to app.json extra or set environment variable.');
}

// Helper: fix common OCR mistakes
const fixCommonOCRMistakes = (text) => {
  return text
    .replace(/Peracstanol/gi, "Paracetamol")
    .replace(/Paracstanol/gi, "Paracetamol")
    .replace(/Tablots/gi, "Tablets")
    .replace(/P800/gi, "500")
    .replace(/S00/gi, "500");
};

export const extractMedicineText = async (base64Image) => {
  // Validate API key before making request
  if (!GEMINI_API_KEY) {
    throw new Error('CONFIG_ERROR: Gemini API key not configured. Please add geminiApiKey to app.json extra.');
  }

  // Check internet connectivity first
  const isOnline = await checkInternet();
  if (!isOnline) {
    throw new Error('OFFLINE');
  }

  if (!base64Image) {
    throw new Error('NO_IMAGE');
  }

  const prompt = "Extract all text visible in this image. Focus on medicine names, dosages, and instructions. Return only the text, nothing else.";

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: prompt },
                {
                  inline_data: {
                    mime_type: 'image/jpeg',
                    data: base64Image,
                  },
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error response:', response.status, errorText);
      throw new Error(`API_ERROR: ${response.status} - ${errorText || 'Unknown error'}`);
    }

    const data = await response.json();
    let extractedText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    // Clean up the extracted text
    extractedText = extractedText
      .replace(/[^a-zA-Z0-9\s\.\-\/]/g, '') // Remove special characters
      .replace(/\s+/g, ' ') // Condense whitespace
      .trim();

    extractedText = fixCommonOCRMistakes(extractedText);

    // Validate the result
    if (!extractedText || extractedText.length < 3) {
      throw new Error('NO_VALID_TEXT');
    }

    return extractedText;
  } catch (error) {
    // Re-throw our custom errors, wrap fetch errors
    if (error.message?.startsWith('CONFIG_ERROR') || error.message?.startsWith('API_ERROR') || error.message === 'OFFLINE' || error.message === 'NO_IMAGE') {
      throw error;
    }
    console.error('Gemini API fetch error:', error);
    throw new Error(`NETWORK_ERROR: ${error.message || 'Failed to connect to API'}`);
  }
};

/**
 * Search medicine information using the backend API
 * @param {string} medicineName - extracted text
 * @returns {Promise<object>} medicine data
 */
export const searchMedicine = async (medicineName) => {
  const isOnline = await checkInternet();
  if (!isOnline) {
    throw new Error('OFFLINE');
  }

  try {
    const response = await fetch('https://rescue-reach-backend.onrender.com/api/v1/medicine/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ medicineName }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown error');
      console.error('Backend API error:', response.status, errorText);
      throw new Error(`API_ERROR: ${response.status} - ${errorText || 'Unknown error'}`);
    }

    const textResponse = await response.text();
    // Clean JSON (remove markdown code blocks)
    let cleanResponse = textResponse
      .replace(/```json/gi, '')
      .replace(/```/g, '')
      .trim();

    let data;
    try {
      data = JSON.parse(cleanResponse);
    } catch (e) {
      // If parsing fails, use the raw text as 'uses'
      data = {
        name: medicineName,
        type: 'Unknown',
        uses: cleanResponse,
      };
    }
    return data;
  } catch (error) {
    // Re-throw our custom errors, wrap fetch errors
    if (error.message === 'OFFLINE' || error.message?.startsWith('API_ERROR')) {
      throw error;
    }
    console.error('Medicine search fetch error:', error);
    throw new Error(`NETWORK_ERROR: ${error.message || 'Failed to connect to API'}`);
  }
};