import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES } from '../constants/colors';

const ReadyScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Offline Lock</Text>

        <Animated.View
          style={[
            styles.iconBox,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}>
          <Text style={styles.iconText}>🛡️</Text>
        </Animated.View>

        <View style={styles.list}>
          <View style={styles.checkItem}>
            <View style={styles.checkIcon}>
              <Text style={styles.checkIconText}>✓</Text>
            </View>
            <Text style={styles.checkItemText}>Guides downloaded.</Text>
          </View>
          <View style={styles.checkItem}>
            <View style={styles.checkIcon}>
              <Text style={styles.checkIconText}>✓</Text>
            </View>
            <Text style={styles.checkItemText}>Images ready.</Text>
          </View>
          <View style={styles.checkItem}>
            <View style={styles.checkIcon}>
              <Text style={styles.checkIconText}>✓</Text>
            </View>
            <Text style={styles.checkItemText}>RescueReach is ready offline.</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace('Dashboard')}>
          <Text style={styles.buttonText}>Enter Dashboard</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff6ff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xxxl,
  },
  title: {
    fontSize: FONT_SIZES.display,
    fontWeight: 'bold',
    color: COLORS.primaryBlue,
    marginBottom: SPACING.xl,
  },
  iconBox: {
    marginBottom: SPACING.xxxl,
  },
  iconText: {
    fontSize: 100,
  },
  list: {
    width: '100%',
    marginBottom: SPACING.xxxl,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  checkIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.success,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
  },
  checkIconText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.md,
    fontWeight: 'bold',
  },
  checkItemText: {
    fontSize: FONT_SIZES.lg,
    fontWeight: '600',
    color: '#334155',
  },
  button: {
    backgroundColor: '#eff6ff',
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xxl,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    borderColor: '#bfdbfe',
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.primaryBlue,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.lg,
  },
});

export default ReadyScreen;