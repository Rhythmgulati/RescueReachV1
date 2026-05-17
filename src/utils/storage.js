import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  CONSENT: 'rescueReach_consent',
  LANGUAGE: 'rescueReach_lang',
  CONTACTS: 'rescueReach_contacts',
  THEME: 'rescueReach_theme',
};

export const saveConsent = async (value) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.CONSENT, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error('Error saving consent:', error);
    return false;
  }
};

export const loadConsent = async () => {
  try {
    const consent = await AsyncStorage.getItem(STORAGE_KEYS.CONSENT);
    return consent ? JSON.parse(consent) : false;
  } catch (error) {
    console.error('Error loading consent:', error);
    return false;
  }
};

export const saveLanguage = async (lang) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
    return true;
  } catch (error) {
    console.error('Error saving language:', error);
    return false;
  }
};

export const loadLanguage = async () => {
  try {
    return await AsyncStorage.getItem(STORAGE_KEYS.LANGUAGE);
  } catch (error) {
    console.error('Error loading language:', error);
    return null;
  }
};

export const saveCustomContacts = async (contacts) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(contacts));
    return true;
  } catch (error) {
    console.error('Error saving contacts:', error);
    return false;
  }
};

export const loadCustomContacts = async () => {
  try {
    const contacts = await AsyncStorage.getItem(STORAGE_KEYS.CONTACTS);
    return contacts ? JSON.parse(contacts) : [];
  } catch (error) {
    console.error('Error loading contacts:', error);
    return [];
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (error) {
    console.error('Error clearing storage:', error);
    return false;
  }
};