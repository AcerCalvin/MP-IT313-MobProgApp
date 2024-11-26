import React from 'react'
import { Stack } from 'expo-router'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const _layout = () => {
  return (
    <PaperProvider>
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="Signup" options={{ headerShown: false }} />
            <Stack.Screen name="PasswordRecovery" options={{ headerShown: false }} />
            <Stack.Screen name="Dashboard" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaProvider>       
    </PaperProvider>
  )
}

export default _layout