import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import passwordRecStyles from '../styles/passwordRecStyles';
import { useRouter } from 'expo-router';

const PasswordRecoveryScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
            onPress: () => router.back('Login'),
          },
        ]
      );
    }, 2000);
  };

  return (
    <View style={[passwordRecStyles.container, { backgroundColor: 'black' }]}>
      <Text style={[passwordRecStyles.title, { color: 'white' }]}>Password Recovery</Text>
      <Text style={[passwordRecStyles.instructions, { color: '#ccc' }]}>
        Enter your email below to receive a password reset link.
      </Text>
      <TextInput
        style={[
          passwordRecStyles.input,
          { borderColor: 'red', backgroundColor: 'black', color: 'white' },
        ]}
        placeholder="Enter your email"
        placeholderTextColor="lightgrey"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={[
          passwordRecStyles.button,
          { backgroundColor: 'red' },
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
      <Text style={[passwordRecStyles.securityNote, { color: '#888' }]}>
        For your security, check your spam folder if you don’t see the recovery email in your inbox. Never share your recovery link with anyone.
      </Text>
      <TouchableOpacity onPress={() => router.back('Login')}>
        <Text style={[passwordRecStyles.backToLogin, { color: 'white' }]}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordRecoveryScreen;