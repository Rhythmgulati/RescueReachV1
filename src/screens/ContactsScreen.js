import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Linking,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES, SHADOWS } from '../constants/colors';
import { CONTACTS, EMERGENCY_NUMBERS } from '../constants/emergencyNumbers';
import { loadLanguage, loadCustomContacts, saveCustomContacts } from '../utils/storage';
import { translations } from '../utils/translations';
import { checkRealInternet } from '../utils/network';

const ContactsScreen = () => {
  const navigation = useNavigation();
  const [lang, setLang] = useState('en');
  const [customContacts, setCustomContacts] = useState([]);
  const t = translations[lang];

  useEffect(() => {
    loadUserLanguage();
    loadContacts();
  }, []);

  const loadUserLanguage = async () => {
    const savedLang = await loadLanguage();
    if (savedLang) setLang(savedLang);
  };

  const loadContacts = async () => {
    const contacts = await loadCustomContacts();
    setCustomContacts(contacts);
  };

  const handleCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleOpenMap = async (query) => {
    const isOnline = await checkRealInternet();
    if (!isOnline) {
      Alert.alert('Offline', t.offline);
      return;
    }

    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Location permission is needed to find nearby places.');
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}&query_place_id=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  const handleAddContact = () => {
    Alert.alert(
      'Add Custom Contact',
      'This feature will be available soon',
      [{ text: 'OK' }]
    );
  };

  const allContacts = [...CONTACTS, ...customContacts];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t.con_head}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddContact}>
          <Text style={styles.addButtonText}>+ {t.add_contact}</Text>
        </TouchableOpacity>

        {allContacts.map((contact) => (
          <View key={contact.id} style={styles.contactCard}>
            <View style={styles.contactInfo}>
              <Text style={styles.contactTitle}>{contact.title}</Text>
              <Text style={styles.contactSubtitle}>{contact.subtitle}</Text>
              <View style={styles.locationBadge}>
                <Text style={styles.locationText}>📍 {contact.mapQuery}</Text>
              </View>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity 
                style={styles.callButton} 
                onPress={() => handleCall(contact.phone)}>
                <Text style={styles.actionButtonText}>CALL</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.mapButton} 
                onPress={() => handleOpenMap(contact.mapQuery)}>
                <Text style={styles.actionButtonText}>MAP</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
    backgroundColor: COLORS.primaryBlue,
    paddingVertical: SPACING.xl,
    paddingHorizontal: SPACING.xl,
    borderBottomLeftRadius: BORDER_RADIUS.xxl,
    borderBottomRightRadius: BORDER_RADIUS.xxl,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: SPACING.lg,
  },
  backButtonText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.xl,
  },
  headerTitle: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: '700',
    color: COLORS.white,
  },
  scrollContent: {
    padding: SPACING.xl,
    gap: SPACING.lg,
  },
  addButton: {
    borderWidth: 2,
    borderColor: COLORS.primaryBlue,
    borderStyle: 'dashed',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.lg,
    backgroundColor: '#eff6ff',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  addButtonText: {
    color: COLORS.primaryBlue,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.md,
  },
  contactCard: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...SHADOWS.small,
  },
  contactInfo: {
    flex: 1,
  },
  contactTitle: {
    fontWeight: 'bold',
    fontSize: FONT_SIZES.lg,
    color: COLORS.textDark,
  },
  contactSubtitle: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textLight,
    marginTop: SPACING.xs,
  },
  locationBadge: {
    marginTop: SPACING.xs,
  },
  locationText: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.primaryRed,
  },
  actionButtons: {
    gap: SPACING.sm,
  },
  callButton: {
    backgroundColor: COLORS.primaryGreen,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.sm,
    alignItems: 'center',
    width: 70,
  },
  mapButton: {
    backgroundColor: COLORS.primaryBlue,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.sm,
    alignItems: 'center',
    width: 70,
  },
  actionButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.sm,
  },
});

export default ContactsScreen;