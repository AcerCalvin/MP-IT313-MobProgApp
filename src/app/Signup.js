import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter
import styles from '../styles/signupStyles';

const SignupScreen = () => {
  const router = useRouter(); // Initialize the router
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
      { text: "OK", onPress: () => router.back('/Login') } // Use router to navigate to Login
    ]);
  };

  return (
    <View style={[styles.container, { backgroundColor: 'black' }]}>
      {/* Logo */}
      <Image
        source={require('../assets/DarkModeLogo.png')} // Use a default logo
        style={styles.logo}
      />
      
      {/* Header */}
      <Text style={[styles.header, { color: 'white' }]}>Sign Up</Text>

      {/* Input Fields */}
      <TextInput
        style={[styles.input, { borderColor: 'red', backgroundColor: 'black', color: 'white' }]} // Updated styles
        placeholder="Name"
        placeholderTextColor="lightgrey"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, { borderColor: 'red', backgroundColor: 'black', color: 'white' }]} // Updated styles
        placeholder="Username"
        placeholderTextColor="lightgrey"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={[styles.input, { borderColor: 'red', backgroundColor: 'black', color: 'white' }]} // Updated styles
        placeholder="Email"
        placeholderTextColor="lightgrey"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, { borderColor: 'red', backgroundColor: 'black', color: 'white' }]} // Updated styles
        placeholder="Password"
        placeholderTextColor="lightgrey"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={[styles.input, { borderColor: 'red', backgroundColor: 'black', color: 'white' }]} // Updated styles
        placeholder="Confirm Password"
        placeholderTextColor="lightgrey"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Login Prompt */}
      <TouchableOpacity onPress={() => router.back('Login')}> 
        <Text style={[styles.loginPrompt, { color: 'white' }]}>
          Already have an account? 
          <Text style={{ color: 'red' }}> Log In</Text> 
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;