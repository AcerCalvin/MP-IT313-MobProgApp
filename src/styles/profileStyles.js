import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    // Profile Section (Avatar and Name) Styles //
    profileSection: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 40,
    },
    imageContainer: {
        backgroundColor: 'white',
        borderRadius: 75,
        padding: 5,
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
    },
    subText: {
        fontSize: 16,
        marginTop: 5,
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
    },
});

export default style;
