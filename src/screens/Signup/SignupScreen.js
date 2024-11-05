// src/screens/SignupScreen/SignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../../DarkLightMode/ThemeContext'; // Import useTheme
import styles from '../../styles/signupStyles';

const SignupScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme(); // Get the current theme
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }

    Alert.alert("Success", `Account created for: ${username}`, [
      { text: "OK", onPress: () => navigation.navigate('Login') }
    ]);
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? 'black' : 'white' }]}>
      {/* Logo - Change based on theme */}
      <Image
        source={isDarkMode ? require('../../assets/DarkModeLogo.png') : require('../../assets/LightModeLogo.png')} // Change logo based on theme
        style={styles.logo}
      />
      
      {/* Header */}
      <Text style={[styles.header, { color: isDarkMode ? 'white' : 'black' }]}>Sign Up</Text>

      {/* Input Fields */}
      <TextInput
        style={[styles.input, { borderColor: isDarkMode ? 'red' : 'black', backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'red' }]}
        placeholder="Name"
        placeholderTextColor={isDarkMode ? '#fff' : 'red'}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, { borderColor: isDarkMode ? 'red' : 'black', backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'red' }]}
        placeholder="Username"
        placeholderTextColor={isDarkMode ? '#fff' : 'red'}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={[styles.input, { borderColor: isDarkMode ? 'red' : 'black', backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'red' }]}
        placeholder="Email"
        placeholderTextColor={isDarkMode ? '#fff' : 'red'}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, { borderColor: isDarkMode ? 'red' : 'black', backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'red' }]}
        placeholder="Password"
        placeholderTextColor={isDarkMode ? '#fff' : 'red'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={[styles.input, { borderColor: isDarkMode ? 'red' : 'black', backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'red' }]}
        placeholder="Confirm Password"
        placeholderTextColor={isDarkMode ? '#fff' : 'red'}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Login Prompt */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={[styles.loginPrompt, { color: isDarkMode ? 'white' : 'black' }]}>
          Already have an account? 
          <Text style={{ color: 'red' }}> Log In</Text> {/* Change Log In color to red */}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
