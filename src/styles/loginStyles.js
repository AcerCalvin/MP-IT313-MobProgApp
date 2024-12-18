import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'black', // Optional: Set container background to black
  },
  logo: {
    width: 130, 
    height: 139, 
    alignSelf: 'center',
    marginBottom: 30,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white', // Change header color to white
  },
  input: {
    height: 50,
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    color: 'white', // Set text color to white
    borderColor: 'red',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'red', // Set to red for dark mode
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: 'red', // Set to red for dark mode
  },
  rememberMeText: {
    marginLeft: 8,
    fontSize: 16,
    color: 'white', // Change color to white
  },
  forgotPassword: {
    color: 'red', // Set to red for dark mode
    fontSize: 16,
  },
  signUpPrompt: {
    color: 'white', // Change color to white
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
  },
});

export default styles;