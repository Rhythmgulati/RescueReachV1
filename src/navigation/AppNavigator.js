import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ConsentScreen from '../screens/ConsentScreen';
import LanguageScreen from '../screens/LanguageScreen';
import ReadyScreen from '../screens/ReadyScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DetailScreen from '../screens/DetailScreen';
import TriageScreen from '../screens/TriageScreen';
import ContactsScreen from '../screens/ContactsScreen';
import WoundAnalysisScreen from '../screens/WoundAnalysisScreen';
import MedicineScannerScreen from '../screens/MedicineScannerScreen';
import SafeScreen from '../screens/SafeScreen';

const Stack = createStackNavigator();

const AppNavigator = ({ initialRouteName }) => {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#f8fafc' },
      }}>
      <Stack.Screen name="Consent" component={ConsentScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="Ready" component={ReadyScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Triage" component={TriageScreen} />
      <Stack.Screen name="Contacts" component={ContactsScreen} />
      <Stack.Screen name="WoundAnalysis" component={WoundAnalysisScreen} />
      <Stack.Screen name="MedicineScanner" component={MedicineScannerScreen} />
      <Stack.Screen name="Safe" component={SafeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;