import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES } from '../constants/colors';
import { saveLanguage } from '../utils/storage';

const languages = [
  { code: 'en', native: 'English', english: 'English', available: true },
  { code: 'hi', native: 'हिन्दी', english: 'Hindi', available: true },
  { code: 'mr', native: 'मराठी', english: 'Marathi', available: true },
  { code: 'bn', native: 'বাংলা', english: 'Bengali', available: false },
  { code: 'ta', native: 'தமிழ்', english: 'Tamil', available: false },
  { code: 'te', native: 'తెలుగు', english: 'Telugu', available: false },
];

const LanguageScreen = () => {
  const navigation = useNavigation();

  const handleLanguageSelect = async (langCode) => {
    await saveLanguage(langCode);
    navigation.replace('Ready');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Choose Language / भाषा चुनें</Text>
        </View>

        <View style={styles.grid}>
          {languages.map((lang) => (
            <TouchableOpacity
              key={lang.code}
              style={[styles.langCard, !lang.available && styles.langCardDisabled]}
              onPress={() => lang.available && handleLanguageSelect(lang.code)}
              disabled={!lang.available}>
              <Text style={styles.langNative}>{lang.native}</Text>
              <Text style={styles.langEng}>{lang.english}</Text>
              {!lang.available && <Text style={styles.comingSoon}>Coming Soon</Text>}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
  },
  scrollContent: {
    flexGrow: 1,
    padding: SPACING.xxxl,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: SPACING.xxxl,
  },
  title: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  langCard: {
    width: '48%',
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.xl,
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  langCardDisabled: {
    opacity: 0.6,
    backgroundColor: '#f8fafc',
  },
  langNative: {
    fontSize: FONT_SIZES.hero,
    fontWeight: '800',
    color: COLORS.textDark,
    marginBottom: SPACING.sm,
  },
  langEng: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textLight,
  },
  comingSoon: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.primaryRed,
    marginTop: SPACING.sm,
  },
});

export default LanguageScreen;