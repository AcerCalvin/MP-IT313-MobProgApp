// src/screens/PasswordRecovery/PasswordRecoveryScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useTheme } from '../../DarkLightMode/ThemeContext'; // Import useTheme
import passwordRecStyles from '../../styles/passwordRecStyles';

const PasswordRecoveryScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme(); // Get theme mode
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRecovery = () => {
    if (!email) {
      Alert.alert('Invalid Input', 'Please enter a valid email address.');
      return;
    }

    setLoading(true);

    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      setEmail('');
      
      // Show confirmation alert
      Alert.alert(
        'Recovery Email Sent',
        'If an account with this email exists, a recovery link has been sent.',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login'),
          },
        ]
      );
    }, 2000);
  };

  return (
    <View style={[passwordRecStyles.container, { backgroundColor: isDarkMode ? 'black' : 'white' }]}>
      <Text style={[passwordRecStyles.title, { color: isDarkMode ? 'white' : 'black' }]}>Password Recovery</Text>
      <Text style={[passwordRecStyles.instructions, { color: isDarkMode ? 'red' : '#555' }]}>
        Enter your email below to receive a password reset link.
      </Text>
      <TextInput
        style={[
          passwordRecStyles.input,
          { borderColor: isDarkMode ? 'red' : 'black', backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'red' }
        ]}
        placeholder="Enter your email"
        placeholderTextColor={isDarkMode ? '#fff' : 'red'}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={[
          passwordRecStyles.button,
          { backgroundColor : 'red' },
          loading && passwordRecStyles.buttonDisabled
        ]}
        onPress={handleRecovery}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={passwordRecStyles.buttonText}>Send Recovery Email</Text>
        )}
      </TouchableOpacity>
      <Text style={[passwordRecStyles.securityNote, { color: isDarkMode ? 'red' : '#888' }]}>
        For your security, check your spam folder if you don’t see the recovery email in your inbox. Never share your recovery link with anyone.
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={[passwordRecStyles.backToLogin, { color: isDarkMode ? 'white' : 'black' }]}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordRecoveryScreen;
