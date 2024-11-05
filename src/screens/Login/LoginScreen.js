// src/screens/LoginScreen/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../../DarkLightMode/ThemeContext'; // Import useTheme
import styles from '../../styles/loginStyles';

const LoginScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      alert(`Logged in as: ${username}`);
      navigation.navigate('Home');
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? 'black' : 'white' }]}>
      {/* Logo - Change based on theme */}
      <Image
        source={isDarkMode ? require('../../assets/DarkModeLogo.png') : require('../../assets/LightModeLogo.png')} // Change logo based on theme
        style={styles.logo}
      />
      
      {/* Header */}
      <Text style={[styles.header, { color: isDarkMode ? 'white' : '#333' }]}>Login</Text>

      {/* Username Input */}
      <TextInput
        style={[styles.input, { borderColor: isDarkMode ? 'red' : 'black', backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'red' }]}
        placeholder="Username"
        placeholderTextColor={isDarkMode ? '#fff' : 'red'}
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        style={[styles.input, { borderColor: isDarkMode ? 'red' : 'black', backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'red' }]}
        placeholder="Password"
        placeholderTextColor={isDarkMode ? '#fff' : 'red'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      {/* Remember Me and Forgot Password */}
      <View style={styles.rememberMeContainer}>
        <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={styles.checkboxContainer}>
          <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]} />
          <Text style={[styles.rememberMeText, { color: isDarkMode ? 'white' : 'black' }]}>Remember Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PasswordRecovery')}>
          <Text style={[styles.forgotPassword, { color: isDarkMode ? 'white' : 'black' }]}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity
        style={[{ backgroundColor: 'red', paddingVertical: 15, paddingHorizontal: 20, borderRadius: 8, alignItems: 'center' }]}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Login</Text>
      </TouchableOpacity>

      {/* Sign Up Prompt */}
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={[styles.signUpPrompt, { color: isDarkMode ? 'white' : 'black' }]}>
          Don't have an account? 
          <Text style={{ color: 'red' }}> Sign Up</Text> {/* Change Sign Up color to red */}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
