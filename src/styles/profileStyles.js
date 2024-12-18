// profileStyles.js
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    // Profile Section (Avatar and Name) Styles //
    profileSection: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 40,
    },
    imageContainer: {
        backgroundColor: 'red',
        borderRadius: 75,
        padding: 4,
        marginBottom: 10,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red', // Set the profile name color to red
    },
    subText: {
        fontSize: 16,
        marginTop: 5,
        color: 'red', // Set default text color to red
    },

    // Profile Details Styles //
    ProfileDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },

    // Row Styles //
    settingsText: {
        fontSize: 18,
        color: 'red', // Set default text color to red
    },
    profileDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },

    // Logout Button Styles //
    logoutContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoutText: {
        marginLeft: 10,
        color: 'red', // Ensure logout text color is red
    },
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 20,
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
        marginBottom: 10,
    },
    profileImage: {
        width: '100%',
        height: '100%',
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 14,
    },
    profileDetailsContainer: {
        marginBottom: 20,
    },
    changePasswordContainer: {
        marginBottom: 20,
    },
    darkModeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    settingsText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default styles;