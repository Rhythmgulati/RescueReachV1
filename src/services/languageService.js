// src/services/languageService.js
import { checkInternet } from '../utils/network.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LANGUAGE_STORAGE_KEY = 'rescueReach_dynamic_translations';
const LANGUAGE_API_URL = 'https://api.rescuereach.app/languages';

// Fetch translations from server
export const fetchTranslationsFromServer = async (langCode) => {
  try {
    const isOnline = await checkInternet();
    if (!isOnline) {
      throw new Error('OFFLINE');
    }

    const response = await fetch(`${LANGUAGE_API_URL}/${langCode}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`API_ERROR: ${response.status}`);
    }

    const data = await response.json();

    // Validate response has required translations
    if (!data || typeof data !== 'object') {
      throw new Error('INVALID_RESPONSE');
    }

    return data;
  } catch (error) {
    console.error('Language fetch error:', error.message);
    throw error;
  }
};

// Save downloaded translations to local storage
export const saveTranslationsToLocal = async (langCode, translations) => {
  try {
    const existing = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
    const allTranslations = existing ? JSON.parse(existing) : {};

    allTranslations[langCode] = translations;
    await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, JSON.stringify(allTranslations));

    return true;
  } catch (error) {
    console.error('Error saving translations:', error);
    return false;
  }
};

// Load cached translations from local storage
export const loadCachedTranslations = async (langCode) => {
  try {
    const stored = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (!stored) return null;

    const allTranslations = JSON.parse(stored);
    return allTranslations[langCode] || null;
  } catch (error) {
    console.error('Error loading cached translations:', error);
    return null;
  }
};

// Get all cached language codes
export const getCachedLanguageCodes = async () => {
  try {
    const stored = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (!stored) return [];

    const allTranslations = JSON.parse(stored);
    return Object.keys(allTranslations);
  } catch (error) {
    console.error('Error getting cached language codes:', error);
    return [];
  }
};