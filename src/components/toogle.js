
import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Ionicons } from '@expo/vector-icons';

export default function Toogle(){
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
 

     return(
        <View>
    <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <AntDesign name="arrowleft" size={35} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>

        <View style={styles.darkModeSwitch}>
          {isDarkMode ? (
            <Ionicons name="sunny" size={24} color="#FFD700" />
          ) : (
            <Ionicons name="moon" size={24} color="#000" />
          )}
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>
        </View>

     )
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
      marginTop: 100,
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
      fontSize: 30,
      fontWeight: 'bold',
    },
    subText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#666',
      marginTop: 1,
    },
    row: {
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
  