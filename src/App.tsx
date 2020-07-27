import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import { Home } from './pages';
import Routes from './routes';

const App: React.FC = () => {
  useEffect(() => {
    async function preventAutoHide() {
      await SplashScreen.preventAutoHideAsync();
    }

    preventAutoHide();
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          {/* eslint-disable-next-line react/style-prop-object */}
          <StatusBar style="auto" backgroundColor="#fff" />
          {/* <Routes /> */}
          <Home />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({ container: { flex: 1 } });

export default App;
