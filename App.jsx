import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Login from './screens/LoginScreen';
import Register from './screens/RegisterScreen';
import Home from './screens/HomeScreen';
import ProfileCreation from './screens/ProfileScreen';
import ForgotPassword from './screens/ForgotPasswordScreen';
import theme from './theme'; // Import du thème
import { ThemeProvider } from './ThemeProvider';
import Map from './screens/MapScreen';



const Stack = createNativeStackNavigator(); // Création de la pile de navigation

SplashScreen.preventAutoHideAsync(); // Prévenir l'affichage automatique de l'écran de démarrage

export default function App(){
  const [fontsLoaded] = useFonts({
    Aladin: require('./assets/font/Aladin-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LoginScreen">
            <Stack.Screen name="LoginScreen" component={Login} />
            <Stack.Screen name="Register screen" component={Register} />
            <Stack.Screen name="Home screen" component={Home} />
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPassword} />
            <Stack.Screen name="ProfileScreen" component={ProfileCreation} />
            <Stack.Screen name="MapScreen" component={Map} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </ThemeProvider>
  );
};

