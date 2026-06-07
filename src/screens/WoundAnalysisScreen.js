// screens/WoundAnalysisScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES } from '../constants/colors';
import { loadLanguage } from '../utils/storage';
import { translations } from '../utils/translations';
import { analyzeWoundWithGemini } from '../services/woundAnalysisService.js';
import { checkInternet } from '../utils/network.js';

const WoundAnalysisScreen = () => {
  const navigation = useNavigation();
  const [lang, setLang] = useState('en');
  const [image, setImage] = useState(null);
  const [base64Data, setBase64Data] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const t = translations[lang];

  useEffect(() => {
    loadUserLanguage();
  }, []);

  const loadUserLanguage = async () => {
    const savedLang = await loadLanguage();
    if (savedLang) setLang(savedLang);
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Need camera roll permissions to upload image.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
      base64: true, // important to get base64 string
    });

    if (!result.canceled) {
      const asset = result.assets[0];
      setImage(asset);
      setBase64Data(asset.base64); // store base64 string (without data:image prefix)
      setResult(null);
    }
  };

  const takePhoto = async () => {
    // Request camera permissions
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Need camera permissions to take photo.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.8,
      base64: true,
    });

    if (!result.canceled) {
      const asset = result.assets[0];
      setImage(asset);
      setBase64Data(asset.base64);
      setResult(null);
    }
  };

  const analyzeWound = async () => {
    console.log('Analyze button pressed');
    if (!image) {
      console.log('No image selected');
      Alert.alert('No Image', t.no_image || 'Please upload an image first.');
      return;
    }

    // Check internet before starting
    console.log('Checking internet connection...');
    const isOnline = await checkInternet();
    console.log('Internet online?', isOnline);
    if (!isOnline) {
      Alert.alert('Offline', 'Wound analysis requires an internet connection.');
      return;
    }

    setAnalyzing(true);
    try {
      console.log('Calling analyzeWoundWithGemini with base64 length:', base64Data?.length);
      const analysisText = await analyzeWoundWithGemini(base64Data);
      console.log('Analysis result:', analysisText);
      setResult(analysisText);
    } catch (error) {
      console.error('Full error:', error);
      if (error.message === 'OFFLINE') {
        Alert.alert('Offline', 'Please check your internet connection and try again.');
      } else if (error.message?.startsWith('CONFIG_ERROR')) {
        Alert.alert('Configuration Error', 'Gemini API key is not configured. Contact support.');
      } else if (error.message?.startsWith('API_ERROR')) {
        Alert.alert('API Error', 'Failed to get analysis from server. Try again later.');
      } else if (error.message?.startsWith('NETWORK_ERROR')) {
        Alert.alert('Network Error', 'Unable to connect to the analysis service.');
      } else {
        Alert.alert('Analysis Failed', error.message || 'Something went wrong.');
      }
      setResult(null);
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Wound Analysis</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.uploadSection}>
          <TouchableOpacity style={styles.uploadBox} onPress={takePhoto}>
            {image ? (
              <Image source={{ uri: image.uri }} style={styles.previewImage} />
            ) : (
              <>
                <Text style={styles.uploadIcon}>📸</Text>
                <Text style={styles.uploadText}>Take Photo</Text>
              </>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.uploadBox} onPress={pickImage}>
            {image ? (
              <Image source={{ uri: image.uri }} style={styles.previewImage} />
            ) : (
              <>
                <Text style={styles.uploadIcon}>🖼️</Text>
                <Text style={styles.uploadText}>Upload Image</Text>
              </>
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.analyzeButton, (!image || analyzing) && styles.analyzeButtonDisabled]}
          onPress={analyzeWound}
          disabled={!image || analyzing}>
          {analyzing ? (
            <ActivityIndicator color={COLORS.white} />
          ) : (
            <Text style={styles.analyzeButtonText}>ANALYZE</Text>
          )}
        </TouchableOpacity>

        {result && (
          <View style={styles.resultBox}>
            <Text style={styles.resultTitle}>Analysis Result</Text>
            <Text style={styles.resultText}>{result}</Text>
            <View style={styles.disclaimerBox}>
              <Text style={styles.disclaimerText}>
                ⚠️ Disclaimer: This is an AI-generated suggestion. Always consult a medical professional for actual diagnosis and treatment.
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles (keep as in your existing code, but I'll include for completeness)
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
    flexGrow: 1,
  },
  uploadSection: {
    flexDirection: 'row',
    gap: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  uploadBox: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#cbd5e1',
    borderStyle: 'dashed',
    borderRadius: BORDER_RADIUS.lg,
    backgroundColor: '#f8fafc',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
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
  analyzeButton: {
    backgroundColor: COLORS.primaryBlue,
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  analyzeButtonDisabled: {
    backgroundColor: '#cbd5e1',
  },
  analyzeButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.lg,
  },
  resultBox: {
    backgroundColor: '#f0fdf4',
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
    marginBottom: SPACING.xl,
  },
  resultTitle: {
    fontWeight: 'bold',
    fontSize: FONT_SIZES.lg,
    color: '#166534',
    marginBottom: SPACING.md,
  },
  resultText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textDark,
    lineHeight: 22,
  },
  disclaimerBox: {
    marginTop: SPACING.lg,
    padding: SPACING.md,
    backgroundColor: '#fff3cd',
    borderRadius: BORDER_RADIUS.sm,
  },
  disclaimerText: {
    fontSize: FONT_SIZES.sm,
    color: '#856404',
  },
});

export default WoundAnalysisScreen;