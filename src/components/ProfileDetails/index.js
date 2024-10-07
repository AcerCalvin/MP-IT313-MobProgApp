import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import style from '../../styles/styles';

export default function ProfileDetails({ isDarkMode }) {
  return (
    <TouchableOpacity style={style.ProfileDetails}>
      <View style={style.profileDetailsContainer}>
        <AntDesign name="profile" size={24} color={isDarkMode ? '#fff' : '#000'} />
        <Text style={[style.settingsText, { color: isDarkMode ? '#fff' : '#000', marginLeft: 10 }]}>Profile details</Text>
      </View>
    </TouchableOpacity>
  );
}
