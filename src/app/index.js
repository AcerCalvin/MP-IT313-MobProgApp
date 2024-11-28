import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/loginStyles';
import CustomButton from '../components/Button'; 
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const router = useRouter();

  const handleLogin = () => {
    if (username && password) {
      alert(`Logged in as: ${username}`);
      router.replace('Dashboard');
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', padding: 16 }}>
      {/* Logo */}
      <Image
        source={require('../assets/DarkModeLogo.png')} 
        style={styles.logo}
      />
      
      {/* Header */}
      <Text style={[styles.header, { color: 'white' }]}>Login</Text>

      {/* Username Input */}
      <TextInput
        style={[styles.input, { backgroundColor: 'black', color: 'white' }]} 
        placeholder="Username"
        placeholderTextColor="lightgray" 
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      {/* Password Input */}
      <View style={{ position: 'relative' }}>
        <TextInput
          style={[styles.input, { backgroundColor: 'black', color: 'white' }]}
          placeholder="Password"
          placeholderTextColor="lightgray"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword} // Toggle visibility based on state
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={{ position: 'absolute', right: 10, top: 10 }} // Position the icon
          onPress={() => setShowPassword(!showPassword)} // Toggle password visibility
        >
          <Icon name={showPassword ? 'visibility' : 'visibility-off'} size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Remember Me and Forgot Password */}
      <View style={styles.rememberMeContainer}>
        <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={styles.checkboxContainer}>
          <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]} />
          <Text style={[styles.rememberMeText, { color: 'white' }]}>Remember Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('PasswordRecovery')}>
          <Text style={[styles.forgotPassword, { color: 'white' }]}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <CustomButton
        title="Login"
        onPress={handleLogin}
      />

      {/* Sign Up Prompt */}
      <TouchableOpacity onPress={() => router.push('/Signup')}>
        <Text style={[styles.signUpPrompt, { color: 'white' }]}>
          Don't have an account? 
          <Text style={{ color: 'red' }}> Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;