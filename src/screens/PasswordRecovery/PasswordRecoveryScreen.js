// src/screens/PasswordRecovery/PasswordRecoveryScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import passwordRecStyles from '../../styles/passwordRecStyles'; // Adjust the import path

const PasswordRecoveryScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleRecovery = () => {
    console.log(`Recovery email sent to: ${email}`);
    navigation.navigate('Login'); // Navigate back to Login after recovery action
  };

  return (
    <View style={passwordRecStyles.container}>
      <Text style={passwordRecStyles.title}>Password Recovery</Text>
      <TextInput
        style={passwordRecStyles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Send Recovery Email" onPress={handleRecovery} />
    </View>
  );
};

export default PasswordRecoveryScreen;
