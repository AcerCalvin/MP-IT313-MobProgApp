// src/screens/Profile/ProfileScreen.js
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import ProfileSection from '../../components/ProfileSection';
import Row from '../../components/ProfileDetails';
import LogoutButton from '../../components/LogoutButton';
import DarkModeSwitch from '../../components/DarkmodeSwitch';

const ProfileScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => !prevState);
  };

  const handleBackPress = () => {
    alert('Back button pressed!');
  };

  const handleLogoutPress = () => {
    alert('Logged out!');
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <AntDesign name="arrowleft" size={24} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>

        <DarkModeSwitch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        <ProfileSection isDarkMode={isDarkMode} />

        <Row isDarkMode={isDarkMode} />

        <LogoutButton isDarkMode={isDarkMode} handleLogoutPress={handleLogoutPress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
});

export default ProfileScreen;
