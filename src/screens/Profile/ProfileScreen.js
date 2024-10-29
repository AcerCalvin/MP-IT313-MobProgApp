import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import ProfileSection from '../../components/ProfileSection';
import Row from '../../components/ProfileDetails';
import LogoutButton from '../../components/LogoutButton';

const ProfileScreen = () => {
  const handleLogoutPress = () => {
    alert('Logged out!');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
      
        <ProfileSection />

        <Row />


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
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'top',
  },
});

export default ProfileScreen;
