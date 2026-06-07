import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { loadLanguage } from '../utils/storage';
import { medicalData } from '../utils/medicalData';

export default function BleedingScreen({ onBack }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    loadUserLanguage();
  }, []);

  const loadUserLanguage = async () => {
    const savedLang = await loadLanguage();
    if (savedLang) setLang(savedLang);
  };

  const data = medicalData.bleeding;
  const title = data?.title?.[lang] || data?.title?.en || 'Severe Bleeding';
  const stepsList = data.steps[lang]?.length > 0 ? data.steps[lang] : data.steps.en;
  const dosList = data.dos[lang] || data.dos.en;
  const dontsList = data.donts[lang] || data.donts.en;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{title}</Text>
        <Text style={{ color: '#475569', marginBottom: 20 }}>
          Immediate action is required to stop life‑threatening blood loss.
        </Text>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Steps:</Text>
          {stepsList.map((step) => (
            <Text key={step.id} style={{ marginBottom: 6 }}>
              {step.id}. {step.t} - {step.d}
            </Text>
          ))}
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Do's:</Text>
          {dosList.map((item, index) => (
            <Text key={index} style={{ color: '#16a34a', marginBottom: 4 }}>✓ {item}</Text>
          ))}
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Don'ts:</Text>
          {dontsList.map((item, index) => (
            <Text key={index} style={{ color: '#dc2626', marginBottom: 4 }}>✕ {item}</Text>
          ))}
        </View>

        <TouchableOpacity
          style={{ backgroundColor: '#dc2626', padding: 14, borderRadius: 12, marginTop: 10, marginBottom: 30 }}
          onPress={() => Linking.openURL('tel:108')}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>🚑 CALL 108 NOW</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onBack} style={{ padding: 10, alignItems: 'center' }}>
          <Text style={{ color: '#64748b' }}>← Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}