import React from 'react';
import { View, Button } from 'react-native';
import styles from '../../styles/homeStyles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Signup"
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
