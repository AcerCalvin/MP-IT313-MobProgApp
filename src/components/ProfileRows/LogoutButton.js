import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import style from '../../styles/profileStyles';

export default function LogoutButton({ handleLogoutPress, isDarkMode }) { // Add isDarkMode as a prop
  return (
    <TouchableOpacity style={style.settingsRow} onPress={handleLogoutPress}>
      <View style={style.logoutContainer}>
        <MaterialIcons name="logout" size={24} color={isDarkMode ? 'red' : 'black'} /> 
        <Text style={[style.settingsText, style.logoutText, { color: isDarkMode ? 'red' : 'black' }]}>Log Out</Text> 
      </View>
    </TouchableOpacity>
  );
}
