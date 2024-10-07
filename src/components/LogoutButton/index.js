import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import style from '../../styles/styles';

export default function LogoutButton({ isDarkMode, handleLogoutPress }) {
  return (
    <TouchableOpacity style={style.settingsRow} onPress={handleLogoutPress}>
      <View style={style.logoutContainer}>
        <MaterialIcons name="logout" size={24} color={isDarkMode ? '#fff' : '#000'} />
        <Text style={[style.settingsText, style.logoutText, { color: isDarkMode ? '#fff' : '#000' }]}>Logout</Text>
      </View>
    </TouchableOpacity>
  );
}
