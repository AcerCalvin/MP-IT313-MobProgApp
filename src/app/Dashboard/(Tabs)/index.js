import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from '../../../components/Logo';

const Home = () => {
  return (
    <View style={styles.container}>
      <Logo toggle={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default Home;