import React from 'react';
import { View, Text, Image } from 'react-native';
import style from '../../styles/profileStyles';

export default function ProfileSection({ isDarkMode }) {
  return (
    <View style={style.profileSection}>
      <View style={style.imageContainer}>
        <Image 
          source={require('../../assets/ace.jpg')}  // Ensure ace.jpg is in /assets folder
          style={style.profileImage} 
        />
      </View>
      <Text style={[style.profileName, { color: isDarkMode ? '#fff' : '#000' }]}>Ace</Text>
      <Text style={[style.subText, { color: isDarkMode ? '#ccc' : '#666' }]}>Acerdano</Text>
    </View>
  );
}


