import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import style from '../../styles/profileStyles';

export default function ProfileDetails({ isDarkMode }) {
  return (
    <TouchableOpacity style={style.ProfileDetails}>
      <View style={style.profileDetailsContainer}>
        <AntDesign name="profile" size={24} color={isDarkMode ? 'red' : 'black'} /> 
        <Text style={[style.settingsText, style.logoutText, { color: isDarkMode ? 'red' : 'black' }]}>Profile details</Text>
      </View>
    </TouchableOpacity>
  );
}
