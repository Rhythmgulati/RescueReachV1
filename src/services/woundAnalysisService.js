// src/services/woundAnalysisService.js
import { checkInternet } from '../utils/network.js';
import Constants from 'expo-constants';

// Get API key from Expo extra config (stored securely via EAS Build)
const GEMINI_API_KEY = Constants.expoConfig?.extra?.geminiApiKey || process.env.GEMINI_API_KEY || '';

// Validate API key early
if (!GEMINI_API_KEY) {
  console.warn('⚠️ Gemini API key not configured. Add geminiApiKey to app.json extra or set environment variable.');
}

export const analyzeWoundWithGemini = async (base64Image) => {
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

  const prompt = "Analyze wound image. Identify type, 3 steps, 1 don't. Short.";

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
    const analysisText =
      data.candidates?.[0]?.content?.parts?.[0]?.text?.replace(/\*/g, '') ||
      'No analysis available.';

    return analysisText;
  } catch (error) {
    // Re-throw our custom errors, wrap fetch errors
    if (error.message?.startsWith('CONFIG_ERROR') || error.message?.startsWith('API_ERROR') || error.message === 'OFFLINE') {
      throw error;
    }
    console.error('Gemini API fetch error:', error);
    throw new Error(`NETWORK_ERROR: ${error.message || 'Failed to connect to API'}`);
  }
};