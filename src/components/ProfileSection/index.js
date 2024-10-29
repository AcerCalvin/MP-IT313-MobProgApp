import React from 'react';
import { View, Text, Image } from 'react-native';
import style from '../../styles/profileStyles';

export default function ProfileSection({ isDarkMode }) {
  return (
    <View style={style.profileSection}>
      <View style={style.imageContainer}>
        <Image 
          source={require('../../assets/noUser.png')}
          style={style.profileImage} 
        />
      </View>
      <Text style={[style.profileName, { color: isDarkMode ? '#fff' : '#000' }]}>User</Text>
    </View>
  );
}


