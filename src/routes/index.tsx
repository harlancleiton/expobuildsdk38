import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';

import { Home } from '../pages';

const Routes: React.FC = () => {
  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }

    hideSplashScreen();
  });

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Routes;
