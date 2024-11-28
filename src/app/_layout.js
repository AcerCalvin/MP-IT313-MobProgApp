import React from 'react';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const _layout = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            headerStyle: {backgroundColor: '#232323'},
            headerTintColor: 'white',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="Signup" options={{ headerShown: false }} />
          <Stack.Screen name="PasswordRecovery" options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" options={{ headerShown: true, title: 'Dashboard' }} />
          <Stack.Screen name="Profile" options={{ headerShown: true, title: 'Profile' }} />
          <Stack.Screen name="Settings" options={{ headerShown: true, title: 'Settings' }} />
        </Stack>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default _layout;