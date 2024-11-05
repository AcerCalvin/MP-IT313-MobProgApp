// signupStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    // Background color will be set in SignupScreen based on theme
  },
  logo: {
    width: 110,
    height: 117,
    alignSelf: 'center',
    marginBottom: 30,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    // Color will be set in SignupScreen based on theme
  },
  input: {
    height: 50,
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    // Background color and border color will be set in SignupScreen based on theme
  },
  button: {
    borderRadius: 8,
    paddingVertical: 15, // Increased vertical padding for a bigger button
    paddingHorizontal: 20, // Adjust horizontal padding if needed
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18, // Increased font size for better visibility
    fontWeight: 'bold',
  },
  loginPrompt: {
    textAlign: 'center',
    marginTop: 0,
    fontSize: 16,
    // Color will be set in SignupScreen based on theme
  },
});

export default styles;
