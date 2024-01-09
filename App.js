import React, { useCallback, useEffect, useState } from 'react';
import { View, Pressable } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';
import AddProperty from './src/components/AddProperty';
import HomeScreen from './src/components/HomeScreen';
import SearchProperty from './src/components/SearchProperty';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="AddProperty" component={AddProperty} />
    <Tab.Screen name="SearchProperty" component={SearchProperty} /> 
  </Tab.Navigator>
);

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  
  useEffect(() => {
    async function prepare() {
      try {

        // Keep the splash screen visible while we fetch resources
        SplashScreen.preventAutoHideAsync();

        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <View
        style={{ flex: 1 }}
        onLayout={onLayoutRootView}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Main" component={MainNavigator} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}