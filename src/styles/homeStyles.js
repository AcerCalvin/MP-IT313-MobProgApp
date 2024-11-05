// homeStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    // Background color will be set in HomeScreen based on theme
  },
  button: {
    marginVertical: 10,
    width: 200,
  },
});

export default styles;
