import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';
import { loadConsent, loadLanguage } from './src/utils/storage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState('Consent');

  useEffect(() => {
    checkInitialRoute();
  }, []);

  const checkInitialRoute = async () => {
    try {
      const consent = await loadConsent();
      const language = await loadLanguage();

      if (!consent) {
        setInitialRoute('Consent');
      } else if (!language) {
        setInitialRoute('Language');
      } else {
        setInitialRoute('Dashboard');
      }
    } catch (error) {
      console.error('Route check error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator initialRouteName={initialRoute} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default gestureHandlerRootHOC(App);