import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES } from '../constants/colors';
import { loadLanguage } from '../utils/storage';
import { translations } from '../utils/translations';

const WoundAnalysisScreen = () => {
  const navigation = useNavigation();
  const [lang, setLang] = useState('en');
  const [image, setImage] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
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
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Need camera roll permissions to upload image.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
      base64: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
      setResult(null);
    }
  };

  const analyzeWound = async () => {
    if (!image) {
      Alert.alert('No Image', t.no_image);
      return;
    }

    setAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setResult({
        type: 'Minor Abrasion',
        steps: ['Clean wound with antiseptic', 'Apply antibiotic cream', 'Cover with sterile bandage'],
        dont: 'Do not pick at scabs',
      });
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Wound Analysis</Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.uploadBox} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image.uri }} style={styles.previewImage} />
          ) : (
            <>
              <Text style={styles.uploadIcon}>📷</Text>
              <Text style={styles.uploadText}>Upload Wound Image</Text>
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.analyzeButton, (!image || analyzing) && styles.analyzeButtonDisabled]}
          onPress={analyzeWound}
          disabled={!image || analyzing}>
          <Text style={styles.analyzeButtonText}>
            {analyzing ? t.analyzing : t.analyze}
          </Text>
        </TouchableOpacity>

        {result && (
          <View style={styles.resultBox}>
            <Text style={styles.resultTitle}>Analysis Result</Text>
            <Text style={styles.resultText}>Type: {result.type}</Text>
            <Text style={styles.resultSubtitle}>Steps:</Text>
            {result.steps.map((step, i) => (
              <Text key={i} style={styles.resultStep}>✓ {step}</Text>
            ))}
            <Text style={styles.resultDont}>✗ {result.dont}</Text>
          </View>
        )}
      </View>
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
    marginBottom: SPACING.sm,
  },
  resultSubtitle: {
    fontWeight: 'bold',
    fontSize: FONT_SIZES.md,
    color: COLORS.textDark,
    marginTop: SPACING.md,
    marginBottom: SPACING.xs,
  },
  resultStep: {
    fontSize: FONT_SIZES.sm,
    color: '#166534',
    marginLeft: SPACING.md,
  },
  resultDont: {
    fontSize: FONT_SIZES.sm,
    color: '#991b1b',
    marginTop: SPACING.md,
    marginLeft: SPACING.md,
  },
});

export default WoundAnalysisScreen;