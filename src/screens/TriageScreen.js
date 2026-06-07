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
import { triageTree, getTriageQuestion, getNextStep } from '../utils/triageTree';

const TriageScreen = () => {
  const navigation = useNavigation();
  const [lang, setLang] = useState('en');
  const [currentStep, setCurrentStep] = useState('step1');

  useEffect(() => {
    loadUserLanguage();
  }, []);

  const loadUserLanguage = async () => {
    const savedLang = await loadLanguage();
    if (savedLang) setLang(savedLang);
  };

  const currentQuestion = getTriageQuestion(currentStep, lang);

  const handleAnswer = (answer) => {
    const next = getNextStep(currentStep, answer);
    if (!next) return;

    if (next.startsWith('step')) {
      setCurrentStep(next);
    } else if (next.startsWith('result_')) {
      const key = next.replace('result_', '');
      switch (key) {
        case 'recovery':
          navigation.replace('Recovery');
          break;
        case 'unconscious':
          navigation.replace('CPR', { language: lang }); 
          break;
        case 'bleeding':
          // Use the existing DetailScreen with bleeding guide
          navigation.replace('Bleeding');
          break;
        case 'safe':
          navigation.replace('Safe');
          break;
        default:
          navigation.goBack();
      }
    }
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Triage Question</Text>

        <View style={styles.questionBox}>
          <Text style={styles.questionText}>{currentQuestion}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.buttonYes]}
            onPress={() => handleAnswer('yes')}>
            <Text style={styles.buttonText}>YES</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.buttonNo]}
            onPress={() => handleAnswer('no')}>
            <Text style={styles.buttonText}>NO</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel</Text>
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
    padding: SPACING.xxxl,
    justifyContent: 'center',
  },
  headerText: {
    color: '#94a3b8',
    fontWeight: 'bold',
    fontSize: FONT_SIZES.sm,
    marginBottom: SPACING.md,
    textTransform: 'uppercase',
  },
  questionBox: {
    backgroundColor: '#fef2f2',
    borderLeftWidth: 5,
    borderLeftColor: COLORS.primaryRed,
    padding: SPACING.xl,
    borderRadius: BORDER_RADIUS.sm,
    marginBottom: SPACING.xxxl,
  },
  questionText: {
    fontSize: FONT_SIZES.xl,
    color: COLORS.textDark,
  },
  buttonContainer: {
    gap: SPACING.lg,
  },
  button: {
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
  },
  buttonYes: {
    backgroundColor: COLORS.primaryRed,
  },
  buttonNo: {
    backgroundColor: COLORS.primaryGreen,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.lg,
  },
  cancelButton: {
    marginTop: SPACING.xl,
    alignItems: 'center',
  },
  cancelText: {
    color: '#94a3b8',
    fontSize: FONT_SIZES.md,
  },
});

export default TriageScreen;