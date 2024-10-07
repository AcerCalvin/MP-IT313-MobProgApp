import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
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
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
        
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <AntDesign name="arrowleft" size={24} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>

        <View style={styles.darkModeSwitch}>
          {isDarkMode ? (
            <Ionicons name="sunny" size={24} color="#FFD700" />
          ) : (
            <Ionicons name="moon" size={24} color="#000" />
          )}
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>

        <View style={styles.profileSection}>
          <View style={styles.imageContainer}>
            <Image 
              source={require('./src/assets/ace.jpg')} 
              style={styles.profileImage} 
            />
          </View>
          <Text style={[styles.profileName, { color: isDarkMode ? '#fff' : '#000' }]}>Ace</Text>
          <Text style={[styles.subText, { color: isDarkMode ? '#ccc' : '#666' }]}>Acerdano</Text>
        </View>

        <TouchableOpacity style={styles.settingsRow}>
          <View style={styles.profileDetailsContainer}>
            <AntDesign name="profile" size={24} color={isDarkMode ? '#fff' : '#000'} />
            <Text style={[styles.settingsText, { color: isDarkMode ? '#fff' : '#000', marginLeft: 10 }]}>Profile details</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsRow} onPress={handleLogoutPress}>
          <View style={styles.logoutContainer}>
            <MaterialIcons name="logout" size={24} color={isDarkMode ? '#fff' : '#000'} />
            <Text style={[styles.settingsText, styles.logoutText, { color: isDarkMode ? '#fff' : '#000' }]}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

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
  darkModeSwitch: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40,
  },
  imageContainer: {
    backgroundColor: 'red',
    borderRadius: 75,
    padding: 5,
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileDetails: {
    fontSize: 16,
    marginTop: 5,
  },
  settingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  settingsText: {
    fontSize: 18,
  },
  profileDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    marginLeft: 10,
  },
});