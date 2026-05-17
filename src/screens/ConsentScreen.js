import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES } from '../constants/colors';
import { saveConsent } from '../utils/storage';

const ConsentScreen = () => {
  const navigation = useNavigation();
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const isConsentValid = check1 && check2;

  const handleAccept = async () => {
    if (isConsentValid) {
      await saveConsent(true);
      navigation.replace('Language');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>🛡️</Text>
          </View>
          <Text style={styles.title}>User Agreement</Text>
          <Text style={styles.subtitle}>RescueReach App</Text>
        </View>

        <View style={styles.disclaimerBox}>
          <Text style={styles.disclaimerTitle}>
            1. No Medical Advice / कोई चिकित्सीय सलाह नहीं
          </Text>
          <Text style={styles.disclaimerText}>
            This app is for informational purposes only. It is not a substitute for professional medical advice.{'\n\n'}
            (यह ऐप केवल जानकारी के लिए है। यह डॉक्टर की सलाह की जगह नहीं ले सकता।)
          </Text>

          <Text style={styles.disclaimerTitle}>2. Emergency / आपातकालीन</Text>
          <Text style={styles.disclaimerText}>
            In case of a life-threatening emergency, call 108 or your local emergency number immediately.{'\n\n'}
            (आपातकालीन स्थिति में तुरंत 108 या एम्बुलेंस को कॉल करें।)
          </Text>

          <Text style={styles.disclaimerTitle}>3. Liability / अस्वीकरण</Text>
          <Text style={styles.disclaimerText}>
            The creators are not responsible for damages resulting from use.{'\n\n'}
            (निर्माता किसी भी नुकसान के लिए जिम्मेदार नहीं हैं।)
          </Text>
        </View>

        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxRow}>
            <Checkbox
              value={check1}
              onValueChange={setCheck1}
              color={check1 ? COLORS.primaryBlue : undefined}
            />
            <Text style={styles.checkboxLabel}>I have read the disclaimer.</Text>
          </View>
          <View style={styles.checkboxRow}>
            <Checkbox
              value={check2}
              onValueChange={setCheck2}
              color={check2 ? COLORS.primaryBlue : undefined}
            />
            <Text style={styles.checkboxLabel}>I agree to Terms of Use.</Text>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.acceptButton, !isConsentValid && styles.acceptButtonDisabled]}
          onPress={handleAccept}
          disabled={!isConsentValid}>
          <Text style={styles.acceptButtonText}>I ACCEPT</Text>
        </TouchableOpacity>
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
    padding: SPACING.xl,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  iconContainer: {
    backgroundColor: '#eff6ff',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.md,
  },
  iconText: {
    fontSize: 30,
  },
  title: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textLight,
  },
  disclaimerBox: {
    backgroundColor: '#f8fafc',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.xl,
  },
  disclaimerTitle: {
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginTop: SPACING.md,
    marginBottom: SPACING.xs,
  },
  disclaimerText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textLight,
    lineHeight: 18,
  },
  checkboxContainer: {
    marginBottom: SPACING.xl,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  checkboxLabel: {
    fontSize: FONT_SIZES.sm,
    fontWeight: 'bold',
    marginLeft: SPACING.sm,
    color: COLORS.textDark,
  },
  acceptButton: {
    backgroundColor: COLORS.primaryBlue,
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
  },
  acceptButtonDisabled: {
    opacity: 0.5,
  },
  acceptButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.lg,
  },
});

export default ConsentScreen;