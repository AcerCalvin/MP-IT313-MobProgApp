// HomeScreen.js
import React from 'react';
import { View, Button } from 'react-native';
import { useTheme } from '../../DarkLightMode/ThemeContext'; // Import useTheme
import styles from '../../styles/homeStyles';

const HomeScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme(); // Get the current theme

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? 'black' : 'white' }]}>
      <View style={styles.button}>
        <Button
          title="Go to Login" 
          onPress={() => navigation.navigate('Login')}
          color={isDarkMode ? 'red' : 'red'} // Button color remains red
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Signup"
          onPress={() => navigation.navigate('Signup')}
          color={isDarkMode ? 'red' : 'red'} // Button color remains red
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Password Recovery"
          onPress={() => navigation.navigate('PasswordRecovery')}
          color={isDarkMode ? 'red' : 'red'} // Button color remains red
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
          color={isDarkMode ? 'red' : 'red'} // Button color remains red
        />
      </View>
    </View>
  );
};

export default HomeScreen;
