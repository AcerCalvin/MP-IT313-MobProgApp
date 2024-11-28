import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Settings = () => {
  const router = useRouter();

  const handleOptionClick = (optionName) => {
    Alert.alert("Selected Option", `${optionName} clicked`);
  };

  const handleLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => {
            // Navigate to the Login screen
            router.replace('/');
          }
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      {/* Main Settings Options */}
      <TouchableOpacity
        style={[styles.fieldContainer]}
        onPress={() => handleOptionClick("Troubleshooting")}
      >
        <FontAwesome name="desktop" size={20} color="white" style={styles.icon} />
        <Text style={styles.fieldText}>Troubleshooting</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.fieldContainer]}
        onPress={() => handleOptionClick("Help and FAQ")}
      >
        <FontAwesome name="question-circle" size={20} color="white" style={styles.icon} />
        <Text style={styles.fieldText}>Help and FAQ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.fieldContainer]}
        onPress={handleLogout} // Call handleLogout instead
      >
        <FontAwesome name="sign-out" size={20} color="white" style={styles.icon} />
        <Text style={styles.fieldText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "black", // Set background color to black
  },
  fieldContainer: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f1f1f", // Keeping the field background black
  },
  fieldText: {
    fontSize: 16,
    flex: 1,
    color: "white",
  },
  icon: {
    marginRight: 15,
  },
});

export default Settings;  