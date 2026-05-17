import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES, SHADOWS } from '../constants/colors';
import { EMERGENCY_NUMBERS } from '../constants/emergencyNumbers';
import { loadLanguage, saveLanguage } from '../utils/storage';
import { translations } from '../utils/translations';
import { checkRealInternet } from '../utils/network';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [lang, setLang] = useState('en');
  const [isOnline, setIsOnline] = useState(true);
  const t = translations[lang];

  useEffect(() => {
    loadUserLanguage();
    checkNetworkStatus();

    const interval = setInterval(checkNetworkStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadUserLanguage = async () => {
    const savedLang = await loadLanguage();
    if (savedLang) setLang(savedLang);
  };

  const checkNetworkStatus = async () => {
    const online = await checkRealInternet();
    setIsOnline(online);
  };

  const medicalGuides = [
    { key: 'snake_bite', icon: '🐍', title: t.snake },
    { key: 'fracture', icon: '🦴', title: t.fracture },
    { key: 'choking', icon: '😵', title: t.choking },
    { key: 'burns', icon: '🔥', title: t.burns },
    { key: 'heatstroke', icon: '☀️', title: t.heatstroke },
    { key: 'dog_bite', icon: '🐕', title: t.dog },
    { key: 'eye_injury', icon: '👁️', title: t.eye },
  ];

  const handleSOSTap = () => {
    Alert.alert(
      t.sos_title,
      'Do you need immediate medical assistance?',
      [
        { text: t.cancel, style: 'cancel' },
        { 
          text: 'Call Ambulance', 
          onPress: () => Linking.openURL(`tel:${EMERGENCY_NUMBERS.ambulance}`) 
        },
        { 
          text: 'Start Triage', 
          onPress: () => navigation.navigate('Triage') 
        },
      ]
    );
  };

  const handleResetLanguage = async () => {
    await saveLanguage(null);
    navigation.replace('Language');
  };

  const handleOpenDetail = (key) => {
    navigation.navigate('Detail', { key });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerSubtitle}>RESCUE REACH</Text>
            <View style={styles.headerTitleRow}>
              <Text style={styles.headerTitle}>{t.welcome}</Text>
              <TouchableOpacity onPress={handleResetLanguage} style={styles.langButton}>
                <Text style={styles.langButtonText}>A/अ</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.statusContainer}>
            <View style={[styles.statusDot, isOnline ? styles.online : styles.offline]} />
            <Text style={styles.statusText}>{isOnline ? 'Online' : 'Offline'}</Text>
          </View>
        </View>

        {/* SOS Button */}
        <TouchableOpacity style={styles.sosContainer} onPress={handleSOSTap}>
          <Text style={styles.sosIcon}>🆘</Text>
          <Text style={styles.sosTitle}>{t.sos_title}</Text>
          <Text style={styles.sosSub}>{t.sos_sub}</Text>
        </TouchableOpacity>

        {/* Medical Guides */}
        <Text style={styles.sectionTitle}>{t.guide_head}</Text>
        <View style={styles.grid}>
          {medicalGuides.map((guide) => (
            <TouchableOpacity
              key={guide.key}
              style={styles.card}
              onPress={() => handleOpenDetail(guide.key)}>
              <Text style={styles.cardIcon}>{guide.icon}</Text>
              <Text style={styles.cardTitle}>{guide.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Smart Tools */}
        <Text style={styles.sectionTitle}>{t.tools_head}</Text>
        <View style={styles.grid}>
          <TouchableOpacity
            style={[styles.card, !isOnline && styles.cardDisabled]}
            onPress={() => {
              if (isOnline) navigation.navigate('WoundAnalysis');
              else Alert.alert('Offline', t.offline);
            }}>
            <Text style={styles.cardIcon}>📷</Text>
            <Text style={styles.cardTitle}>{t.wound}</Text>
            <Text style={styles.cardStatus}>Online Only</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, !isOnline && styles.cardDisabled]}
            onPress={() => {
              if (isOnline) navigation.navigate('MedicineScanner');
              else Alert.alert('Offline', t.offline);
            }}>
            <Text style={styles.cardIcon}>💊</Text>
            <Text style={styles.cardTitle}>{t.meds}</Text>
            <Text style={styles.cardStatus}>Online Only</Text>
          </TouchableOpacity>
        </View>

        {/* Contacts Button */}
        <View style={styles.contactsButtonContainer}>
          <TouchableOpacity 
            style={styles.contactsButton} 
            onPress={() => navigation.navigate('Contacts')}>
            <Text style={styles.contactsButtonText}>📞 {t.contacts}</Text>
            <Text style={styles.contactsButtonArrow}>→</Text>
          </TouchableOpacity>
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
  header: {
    padding: SPACING.xl,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  headerSubtitle: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textLight,
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  headerTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  langButton: {
    backgroundColor: '#eff6ff',
    borderWidth: 1,
    borderColor: '#bfdbfe',
    borderRadius: BORDER_RADIUS.sm,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
  },
  langButtonText: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.primaryBlue,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  online: {
    backgroundColor: COLORS.online,
  },
  offline: {
    backgroundColor: COLORS.offline,
  },
  statusText: {
    fontSize: FONT_SIZES.xs,
    fontWeight: 'bold',
    color: '#94a3b8',
  },
  sosContainer: {
    backgroundColor: '#dc2626',
    margin: SPACING.xl,
    padding: SPACING.xl,
    borderRadius: BORDER_RADIUS.xxl,
    alignItems: 'center',
    ...SHADOWS.medium,
  },
  sosIcon: {
    fontSize: 36,
    marginBottom: SPACING.sm,
  },
  sosTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: SPACING.xs,
  },
  sosSub: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.white,
    opacity: 0.9,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.textDark,
    paddingHorizontal: SPACING.xl,
    marginBottom: SPACING.md,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.xl,
    marginBottom: SPACING.xl,
  },
  card: {
    backgroundColor: '#f1f5f9',
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    width: '48%',
    marginBottom: SPACING.lg,
  },
  cardDisabled: {
    opacity: 0.6,
    backgroundColor: COLORS.disabledBg,
  },
  cardIcon: {
    fontSize: 30,
    marginBottom: SPACING.xs,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: FONT_SIZES.md,
    color: COLORS.textDark,
  },
  cardStatus: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textLight,
    marginTop: SPACING.xs,
  },
  contactsButtonContainer: {
    paddingHorizontal: SPACING.xl,
    paddingBottom: SPACING.xl,
  },
  contactsButton: {
    backgroundColor: '#eff6ff',
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    borderColor: '#bfdbfe',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contactsButtonText: {
    color: COLORS.primaryBlue,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.lg,
  },
  contactsButtonArrow: {
    color: COLORS.primaryBlue,
    fontSize: FONT_SIZES.xl,
  },
});

export default DashboardScreen;