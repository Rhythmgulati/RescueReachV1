import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
  Linking,
} from 'react-native';
import { Audio } from 'expo-av';
import { Video } from 'expo-av';
import { useNavigation, useRoute } from '@react-navigation/native';
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES, SHADOWS } from '../constants/colors';
import { EMERGENCY_NUMBERS } from '../constants/emergencyNumbers';
import { loadLanguage } from '../utils/storage';
import { medicalData } from '../utils/medicalData';

const DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { key } = route.params;
  const [lang, setLang] = useState('en');
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [cprActive, setCprActive] = useState(false);
  const [cprCount, setCprCount] = useState(0);
  const cprInterval = useRef(null);

  const data = medicalData[key];
  const title = data?.title?.[lang] || data?.title?.en || 'First Aid Guide';

  useEffect(() => {
    loadUserLanguage();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
      stopCPR();
    };
  }, []);

  const loadUserLanguage = async () => {
    const savedLang = await loadLanguage();
    if (savedLang) setLang(savedLang);
  };

  const playAudio = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        await sound.playAsync();
        setIsPlaying(true);
      }
      return;
    }

    if (data?.audio && data.audio[lang]) {
      const { sound: newSound } = await Audio.Sound.createAsync(data.audio[lang]);
      setSound(newSound);
      await newSound.playAsync();
      setIsPlaying(true);
      
      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          setIsPlaying(false);
        }
      });
    }
  };

  const startCPR = () => {
    if (cprActive) {
      stopCPR();
      return;
    }
    
    setCprActive(true);
    cprInterval.current = setInterval(() => {
      setCprCount(prev => prev + 1);
    }, 545); // ~110 beats per minute
  };

  const stopCPR = () => {
    if (cprInterval.current) {
      clearInterval(cprInterval.current);
      cprInterval.current = null;
    }
    setCprActive(false);
  };

  const resetCPR = () => {
    stopCPR();
    setCprCount(0);
  };

  const handleCallAmbulance = () => {
    Linking.openURL(`tel:${EMERGENCY_NUMBERS.ambulance}`);
  };

  if (!data) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Guide not found</Text>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const stepsList = data.steps[lang]?.length > 0 ? data.steps[lang] : data.steps.en;
  const dosList = data.dos[lang]?.length > 0 ? data.dos[lang] : data.dos.en;
  const dontsList = data.donts[lang]?.length > 0 ? data.donts[lang] : data.donts.en;
  const isCPRGuide = key === 'unconscious';
  const hasAudio = data?.audio && data.audio[lang];
  const hasVideo = data?.video && data.video[lang];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with Image/Video */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
            <Text style={styles.backArrowText}>←</Text>
          </TouchableOpacity>
          
          {hasVideo ? (
            <Video
              source={data.video[lang]}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay={false}
              useNativeControls
              style={styles.media}
            />
          ) : (
            <Image source={data.image} style={styles.media} resizeMode="cover" />
          )}
          
          <View style={styles.titleOverlay}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>

        <View style={styles.content}>
          {/* Audio Player */}
          {hasAudio && (
            <TouchableOpacity style={styles.audioBox} onPress={playAudio}>
              <Text style={styles.audioLabel}>🔊 Audio Guide {isPlaying ? '⏸' : '▶'}</Text>
            </TouchableOpacity>
          )}

          {/* CPR Module */}
          {isCPRGuide && (
            <View style={styles.cprBox}>
              <Text style={styles.cprTitle}>CPR ASSISTANT</Text>
              <Text style={styles.cprSubtitle}>Follow the beat</Text>
              <Text style={styles.cprHeart}>❤️</Text>
              <Text style={styles.cprCount}>{cprCount}</Text>
              <View style={styles.cprButtons}>
                <TouchableOpacity 
                  style={[styles.cprButton, cprActive && styles.cprButtonActive]} 
                  onPress={startCPR}>
                  <Text style={styles.cprButtonText}>{cprActive ? '⏸ STOP' : '▶ START'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cprResetButton} onPress={resetCPR}>
                  <Text style={styles.cprResetText}>↺ RESET</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* Steps */}
          <Text style={styles.sectionTitle}>Steps</Text>
          {stepsList.map((step) => (
            <View key={step.id} style={styles.stepItem}>
              <View style={styles.stepNum}>
                <Text style={styles.stepNumText}>{step.id}</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>{step.t}</Text>
                <Text style={styles.stepDesc}>{step.d}</Text>
              </View>
            </View>
          ))}

          {/* Do's */}
          <Text style={styles.sectionTitle}>Do's ✓</Text>
          {dosList.map((item, index) => (
            <View key={index} style={styles.doCard}>
              <Text style={styles.doText}>✓ {item}</Text>
            </View>
          ))}

          {/* Don'ts */}
          <Text style={styles.sectionTitle}>Don'ts ✗</Text>
          {dontsList.map((item, index) => (
            <View key={index} style={styles.dontCard}>
              <Text style={styles.dontText}>✗ {item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerSmall} onPress={() => navigation.goBack()}>
          <Text style={styles.footerIcon}>🏠</Text>
          <Text style={styles.footerText}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerLarge} onPress={handleCallAmbulance}>
          <Text style={styles.footerIcon}>📞</Text>
          <Text style={styles.footerText}>CALL 108</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerSmall} onPress={() => navigation.navigate('Contacts')}>
          <Text style={styles.footerIcon}>📖</Text>
          <Text style={styles.footerText}>CONTACTS</Text>
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
  header: {
    height: 220,
    backgroundColor: '#334155',
    position: 'relative',
  },
  backArrow: {
    position: 'absolute',
    top: SPACING.lg,
    left: SPACING.lg,
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 50,
  },
  backArrowText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.xl,
  },
  media: {
    width: '100%',
    height: '100%',
  },
  titleOverlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: SPACING.xl,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  title: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  content: {
    padding: SPACING.xl,
    paddingBottom: 100,
  },
  audioBox: {
    backgroundColor: '#f0f9ff',
    borderWidth: 1,
    borderColor: '#bae6fd',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.xl,
  },
  audioLabel: {
    fontSize: FONT_SIZES.md,
    color: COLORS.primaryBlue,
  },
  cprBox: {
    backgroundColor: '#fff1f2',
    borderWidth: 2,
    borderColor: '#e11d48',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.xl,
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  cprTitle: {
    fontWeight: 'bold',
    color: '#9f1239',
    fontSize: FONT_SIZES.lg,
  },
  cprSubtitle: {
    fontSize: FONT_SIZES.sm,
    color: '#be123c',
  },
  cprHeart: {
    fontSize: 50,
    marginVertical: SPACING.md,
  },
  cprCount: {
    fontSize: 40,
    fontWeight: '900',
    color: COLORS.textDark,
  },
  cprButtons: {
    flexDirection: 'row',
    gap: SPACING.md,
    marginTop: SPACING.md,
  },
  cprButton: {
    backgroundColor: '#e11d48',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
  },
  cprButtonActive: {
    backgroundColor: '#334155',
  },
  cprButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  cprResetButton: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
  },
  cprResetText: {
    color: '#334155',
  },
  sectionTitle: {
    fontSize: FONT_SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: SPACING.md,
    marginTop: SPACING.xl,
  },
  stepItem: {
    flexDirection: 'row',
    gap: SPACING.lg,
    backgroundColor: COLORS.white,
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.md,
  },
  stepNum: {
    backgroundColor: '#dbeafe',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumText: {
    color: COLORS.primaryBlue,
    fontWeight: 'bold',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontWeight: 'bold',
    fontSize: FONT_SIZES.md,
    color: COLORS.textDark,
  },
  stepDesc: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textLight,
    marginTop: SPACING.xs,
  },
  doCard: {
    backgroundColor: '#f0fdf4',
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primaryGreen,
    padding: SPACING.md,
    borderRadius: 4,
    marginBottom: SPACING.sm,
  },
  doText: {
    fontSize: FONT_SIZES.sm,
    color: '#166534',
  },
  dontCard: {
    backgroundColor: '#fef2f2',
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primaryRed,
    padding: SPACING.md,
    borderRadius: 4,
    marginBottom: SPACING.sm,
  },
  dontText: {
    fontSize: FONT_SIZES.sm,
    color: '#991b1b',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    padding: SPACING.md,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  footerSmall: {
    flex: 1,
    backgroundColor: '#f8fafc',
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.sm,
  },
  footerLarge: {
    flex: 2,
    backgroundColor: COLORS.primaryRed,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.sm,
    transform: [{ translateY: -5 }],
    ...SHADOWS.small,
  },
  footerIcon: {
    fontSize: FONT_SIZES.lg,
  },
  footerText: {
    fontSize: FONT_SIZES.xs,
    fontWeight: 'bold',
    color: COLORS.primaryBlue,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xxxl,
  },
  errorText: {
    fontSize: FONT_SIZES.lg,
    color: COLORS.textDark,
    marginBottom: SPACING.xl,
  },
  backButton: {
    backgroundColor: COLORS.primaryBlue,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
  },
  backButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
});

export default DetailScreen;