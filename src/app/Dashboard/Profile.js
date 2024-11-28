import React, { useState } from "react";
import { View, Text, Image, Switch, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Profile = () => {
  // Set isDarkMode to true for dark mode as default
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  const handleEditField = (fieldName) => {
    Alert.alert("Edit", `${fieldName} field clicked`);
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? "black" : "white" }]}>
      {/* Header with Avatar */}
      <View style={styles.avatarSection}>
        <View style={styles.avatarContainer}>
          <Image
            source={require("../../assets/NoUser.jpg")} // Replace with your avatar image
            style={styles.profileImage}
          />
        </View>
        <Text style={[styles.profileName, { color: isDarkMode ? "white" : "black" }]}>User  </Text>
        <Text style={[styles.emailText, { color: isDarkMode ? "lightgray" : "darkgray" }]}>user@example.com</Text>
      </View>

      {/* Editable Fields with Icons */}
      {[
        { name: "Personal Details", icon: "user" },
        { name: "Change Password", icon: "lock" }
      ].map((field) => (
        <TouchableOpacity
          key={field.name}
          style={[styles.fieldContainer, { borderColor: isDarkMode ? "red" : "black", backgroundColor: isDarkMode ? "#1f1f1f" : "white" }]} // Conditional background color
          onPress={() => handleEditField(field.name)}
        >
          <FontAwesome name={field.icon} size={20} color={isDarkMode ? "white" : "black"} style={styles.icon} />
          <Text style={[styles.fieldText, { color: isDarkMode ? "white" : "black" }]}>{field.name}</Text>
        </TouchableOpacity>
      ))}

      {/* Dark Mode Toggle */}
      <View style={[styles.darkmodeContainer, { borderColor: isDarkMode ? "red" : "black" , backgroundColor: isDarkMode ? "#1f1f1f" : 'white'}]}>
        <FontAwesome name={isDarkMode ? "moon-o" : "sun-o"} size={20} color={isDarkMode ? "white" : "black"} style={styles.icon} />
        <Text style={[styles.fieldText, { color: isDarkMode ? "white" : "black" }]}>Light Mode</Text>
        <Switch
          trackColor={{ false: "black", true: "#e24d4d" }}
          thumbColor={isDarkMode ? "red" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  avatarSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatarContainer: {
    backgroundColor: 'red',
    borderRadius: 75,
    padding: 4,
    marginBottom: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  fieldContainer: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  fieldText: {
    flex: 1,
    fontSize: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 16,
    marginTop: 5,
  },
  darkmodeContainer: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 1,
    paddingHorizontal: 20,
    marginVertical: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 15,
  },
});

export default Profile