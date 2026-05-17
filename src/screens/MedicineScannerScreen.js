import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES } from '../constants/colors';
import { loadLanguage } from '../utils/storage';
import { translations } from '../utils/translations';

const MedicineScannerScreen = () => {
  const navigation = useNavigation();
  const [lang, setLang] = useState('en');
  const [image, setImage] = useState(null);
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(null);
  const t = translations[lang];

  React.useEffect(() => {
    loadUserLanguage();
  }, []);

  const loadUserLanguage = async () => {
    const savedLang = await loadLanguage();
    if (savedLang) setLang(savedLang);
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Need camera permissions to scan medicine.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.8,
      base64: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
      setResult(null);
    }
  };

  const scanMedicine = async () => {
    if (!image) {
      Alert.alert('No Image', t.no_image);
      return;
    }

    setScanning(true);
    // Simulate OCR + API call
    setTimeout(() => {
      setResult({
        name: 'Paracetamol 500mg',
        type: 'Analgesic / Antipyretic',
        uses: 'Fever, Mild to moderate pain, Headache',
        warning: 'Do not exceed recommended dose. Consult doctor for children under 12.',
      });
      setScanning(false);
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Medicine Scanner</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.uploadBox} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image.uri }} style={styles.previewImage} />
          ) : (
            <>
              <Text style={styles.uploadIcon}>💊</Text>
              <Text style={styles.uploadText}>Scan Medicine Label</Text>
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.scanButton, (!image || scanning) && styles.scanButtonDisabled]}
          onPress={scanMedicine}
          disabled={!image || scanning}>
          <Text style={styles.scanButtonText}>
            {scanning ? t.reading : t.identify}
          </Text>
        </TouchableOpacity>

        {result && (
          <View style={styles.resultBox}>
            <Text style={styles.resultTitle}>Medicine Information</Text>
            <Text style={styles.resultLabel}>Name:</Text>
            <Text style={styles.resultText}>{result.name}</Text>
            <Text style={styles.resultLabel}>Type:</Text>
            <Text style={styles.resultText}>{result.type}</Text>
            <Text style={styles.resultLabel}>Uses:</Text>
            <Text style={styles.resultText}>{result.uses}</Text>
            <Text style={styles.resultLabel}>Warning:</Text>
            <Text style={styles.resultWarning}>{result.warning}</Text>

            <View style={styles.disclaimerBox}>
              <Text style={styles.disclaimerTitle}>⚠️ Disclaimer / अस्वीकरण</Text>
              <Text style={styles.disclaimerText}>
                हिंदी: यह जानकारी केवल शैक्षिक उद्देश्य के लिए है। किसी भी दवा का सेवन करने से पहले चिकित्सक की सलाह अवश्य लें।
                {'\n\n'}
                English: This information is for educational purposes only. Always consult a doctor before taking any medication.
              </Text>
            </View>
          </View>
        )}
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.xl,
    backgroundColor: COLORS.white,
  },
  backButton: {
    marginRight: SPACING.lg,
  },
  backButtonText: {
    fontSize: FONT_SIZES.xl,
    color: COLORS.textDark,
  },
  headerTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  content: {
    padding: SPACING.xl,
  },
  uploadBox: {
    borderWidth: 2,
    borderColor: '#cbd5e1',
    borderStyle: 'dashed',
    borderRadius: BORDER_RADIUS.lg,
    backgroundColor: '#f8fafc',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.xl,
  },
  uploadIcon: {
    fontSize: 40,
    marginBottom: SPACING.md,
  },
  uploadText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textLight,
  },
  previewImage: {
    width: '100%',
    height: '100%',
    borderRadius: BORDER_RADIUS.lg,
  },
  scanButton: {
    backgroundColor: COLORS.primaryBlue,
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  scanButtonDisabled: {
    backgroundColor: '#cbd5e1',
  },
  scanButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.lg,
  },
  resultBox: {
    backgroundColor: '#eff6ff',
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
  },
  resultTitle: {
    fontWeight: 'bold',
    fontSize: FONT_SIZES.lg,
    color: COLORS.primaryBlue,
    marginBottom: SPACING.md,
  },
  resultLabel: {
    fontWeight: 'bold',
    fontSize: FONT_SIZES.sm,
    color: COLORS.textLight,
    marginTop: SPACING.sm,
  },
  resultText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textDark,
  },
  resultWarning: {
    fontSize: FONT_SIZES.md,
    color: '#991b1b',
    marginTop: SPACING.xs,
  },
  disclaimerBox: {
    marginTop: SPACING.lg,
    padding: SPACING.md,
    backgroundColor: '#fff3cd',
    borderRadius: BORDER_RADIUS.sm,
    borderWidth: 1,
    borderColor: '#ffeeba',
  },
  disclaimerTitle: {
    fontWeight: 'bold',
    fontSize: FONT_SIZES.sm,
    color: '#856404',
    marginBottom: SPACING.xs,
  },
  disclaimerText: {
    fontSize: FONT_SIZES.xs,
    color: '#856404',
    lineHeight: 16,
  },
});

export default MedicineScannerScreen;