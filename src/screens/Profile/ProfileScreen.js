import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import ProfileSection from '../../components/ProfileSection';
import LogoutButton from '../../components/ProfileRows/LogoutButton';
import ProfileDetails from '../../components/ProfileRows/ProfileDetailsButton';
import ChangePassword from '../../components/ProfileRows/ChangePasswordButton';

const ProfileScreen = ({ navigation }) => {
  const handleLogoutPress = () => {
    alert('Logged out!');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        <ProfileSection />
        <ChangePassword />
        <ProfileDetails />
        <LogoutButton handleLogoutPress={handleLogoutPress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'top',
  },
});

export default ProfileScreen;
