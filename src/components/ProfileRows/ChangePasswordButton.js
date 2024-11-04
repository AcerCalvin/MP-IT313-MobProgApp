import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import style from '../../styles/profileStyles';

export default function ChangePassword({ isDarkMode, handleLogoutPress }) {
  return (
    <TouchableOpacity style={style.settingsRow} onPress={handleLogoutPress}>
      <View style={style.logoutContainer}>
         <MaterialIcons name="password" size={24} color={isDarkMode ? '#fff' : '#000'} />
        <Text style={[style.settingsText, style.logoutText, { color: isDarkMode ? '#fff' : '#000' }]}>Change Password</Text>
      </View>
    </TouchableOpacity>
  );
}
