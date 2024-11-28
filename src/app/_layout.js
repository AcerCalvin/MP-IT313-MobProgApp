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
          <Stack.Screen name="Dashboard" options={{ headerShown: false, title: 'Dashboard' }} />
        </Stack>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default _layout;