// ProfileScreen.js
import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import { useTheme } from '../../DarkLightMode/ThemeContext'; // Import useTheme
import ProfileSection from '../../components/ProfileSection';
import LogoutButton from '../../components/ProfileRows/LogoutButton';
import ProfileDetails from '../../components/ProfileRows/ProfileDetailsButton';
import ChangePassword from '../../components/ProfileRows/ChangePasswordButton';

const ProfileScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme(); // Get the current theme

  const handleLogoutPress = () => {
    alert('Logged out!');
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={styles.container}>
        <ProfileSection isDarkMode={isDarkMode} />
        <ChangePassword isDarkMode={isDarkMode} />
        <ProfileDetails isDarkMode={isDarkMode} />
        <LogoutButton isDarkMode={isDarkMode} handleLogoutPress={handleLogoutPress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'top',
  },
});

export default ProfileScreen;
