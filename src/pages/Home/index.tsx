import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';

const Home: React.FC = () => {
  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }

    hideSplashScreen();
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
