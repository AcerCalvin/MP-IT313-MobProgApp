import React from 'react';
import { View, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from '../../styles/styles';

export default function DarkModeSwitch({ isDarkMode, toggleDarkMode }) {
  return (
    <View style={style.darkModeSwitch}>
      {isDarkMode ? (
        <Ionicons name="sunny" size={24} color="#FFD700" />
      ) : (
        <Ionicons name="moon" size={24} color="#000" />
      )}
      <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
    </View>
  );
}

