import React from 'react';
import { View, Text, Image } from 'react-native';
import style from '../../styles/profileStyles';

export default function ProfileSection({ isDarkMode }) {
  return (
    <View style={style.profileSection}>
      <View style={[style.imageContainer, { backgroundColor: isDarkMode ? 'red' : 'black' }]}> 
        <Image 
          source={require('../../assets/NoUser.jpg')}
          style={style.profileImage} 
        />
      </View>
      <Text style={[style.profileName, { color: isDarkMode ? 'red' : 'black' }]}>User</Text> 
    </View>
  );
}
