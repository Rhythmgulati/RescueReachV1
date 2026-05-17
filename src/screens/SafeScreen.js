import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES } from '../constants/colors';
import { loadLanguage } from '../utils/storage';
import { translations } from '../utils/translations';

const SafeScreen = () => {
  const navigation = useNavigation();
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  useEffect(() => {
    loadUserLanguage();
  }, []);

  const loadUserLanguage = async () => {
    const savedLang = await loadLanguage();
    if (savedLang) setLang(savedLang);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.icon}>🛡️</Text>
        <Text style={styles.title}>Safe</Text>
        <Text style={styles.subtitle}>No critical risk detected.</Text>
        
        <TouchableOpacity 
          style={styles.doctorButton} 
          onPress={() => navigation.navigate('Contacts')}>
          <Text style={styles.doctorButtonText}>Contact Doctor</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.homeButton} 
          onPress={() => navigation.replace('Dashboard')}>
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xxxl,
  },
  icon: {
    fontSize: 60,
    marginBottom: SPACING.lg,
  },
  title: {
    fontSize: FONT_SIZES.display,
    fontWeight: 'bold',
    color: '#166534',
    marginBottom: SPACING.md,
  },
  subtitle: {
    fontSize: FONT_SIZES.lg,
    color: COLORS.textLight,
    marginBottom: SPACING.xxxl,
  },
  doctorButton: {
    backgroundColor: COLORS.primaryBlue,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xxl,
    borderRadius: BORDER_RADIUS.md,
    marginBottom: SPACING.md,
    width: '100%',
    alignItems: 'center',
  },
  doctorButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.lg,
  },
  homeButton: {
    backgroundColor: '#f1f5f9',
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xxl,
    borderRadius: BORDER_RADIUS.md,
    width: '100%',
    alignItems: 'center',
  },
  homeButtonText: {
    color: COLORS.textLight,
    fontSize: FONT_SIZES.lg,
  },
});

export default SafeScreen;