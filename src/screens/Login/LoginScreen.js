import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from '../../styles/loginStyles';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Logged in as: ${username}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('PasswordRecovery')}>
      <Text style={{ color: 'blue', marginTop: 10 }}>Forgot Password?</Text>
    </TouchableOpacity>
    </View>
      
  );
};

export default LoginScreen;
