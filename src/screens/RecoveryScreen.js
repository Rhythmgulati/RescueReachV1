import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function RecoveryScreen({ onBack }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Recovery Position</Text>
        <Text style={{ color: '#475569', marginBottom: 20 }}>
          Use this position for an unconscious person who is breathing normally.
        </Text>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Steps:</Text>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ marginBottom: 6 }}>1. Place the arm nearest you at a right angle.</Text>
            <Text style={{ marginBottom: 6 }}>2. Bring the other arm across the chest and place the back of the hand against the person's cheek.</Text>
            <Text style={{ marginBottom: 6 }}>3. Bend the far knee.</Text>
            <Text style={{ marginBottom: 6 }}>4. Gently roll the person onto their side toward you.</Text>
            <Text style={{ marginBottom: 6 }}>5. Tilt the head back slightly to keep the airway open.</Text>
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Do's:</Text>
          <Text style={{ color: '#16a34a', marginBottom: 4 }}>✓ Keep airway open</Text>
          <Text style={{ color: '#16a34a', marginBottom: 4 }}>✓ Monitor breathing continuously</Text>
          <Text style={{ color: '#16a34a', marginBottom: 4 }}>✓ Call for ambulance if not already done</Text>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Don'ts:</Text>
          <Text style={{ color: '#dc2626', marginBottom: 4 }}>✕ Leave the person alone</Text>
          <Text style={{ color: '#dc2626', marginBottom: 4 }}>✕ Place pillows under the head that block the airway</Text>
        </View>

        <TouchableOpacity
          style={{ backgroundColor: '#2563eb', padding: 14, borderRadius: 12, marginTop: 10, marginBottom: 30 }}
          onPress={() => Linking.openURL('tel:108')}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>📞 CALL 108 (AMBULANCE)</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onBack} style={{ padding: 10, alignItems: 'center' }}>
          <Text style={{ color: '#64748b' }}>← Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}