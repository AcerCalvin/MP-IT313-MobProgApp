// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider, useTheme } from './src/DarkLightMode/ThemeContext';
import { lightTheme, darkTheme } from './src/DarkLightMode/theme';
import HomeScreen from './src/screens/Homescreen/HomeScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import SignupScreen from './src/screens/Signup/SignupScreen';
import PasswordRecoveryScreen from './src/screens/PasswordRecovery/PasswordRecoveryScreen';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'; 
import { TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: currentTheme.headerBackgroundColor,
        },
        headerTintColor: isDarkMode ? 'white' : 'black', // Set headerTintColor based on theme
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 15 }}>
            {isDarkMode ? (
              <MaterialIcons name="dark-mode" size={24} color='white' />
            ) : (
              <MaterialIcons name="light-mode" size={24} color='black' />
            )}
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Mock Navigation Homepage' }}
      />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ title: 'Login' }}
      />
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ title: 'Profile' }} 
      />
      <Stack.Screen 
        name="Signup" 
        component={SignupScreen} 
        options={{ title: 'Create Account' }}
      />
      <Stack.Screen 
        name="PasswordRecovery" 
        component={PasswordRecoveryScreen} 
        options={{ title: 'Recover Password' }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
