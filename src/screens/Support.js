import React from "react";
import { View, Text, TouchableOpacity, Dimensions, Linking, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Support = ({ navigation }) => {
  const screenWidth = Dimensions.get("screen").width;

  // Function to handle phone calls
  const handleCallAgent = () => {
    const phoneNumber = "tel:0784127871";
    Linking.canOpenURL(phoneNumber)
      .then((supported) => {
        if (!supported) {
          Alert.alert("Error", "Your device does not support phone calls.");
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch((err) => console.error("Error opening phone URL:", err));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 90,
      }}
    >
      {/* Main Content */}
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "black",
            marginBottom: 20,
          }}
        >
          Support
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: "black",
            marginBottom: 12,
          }}
        >
          Need help with customer support?
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "gray",
            marginBottom: 24,
          }}
        >
          Get instant help from our customer support team
        </Text>

        {/* Live Chat Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("chat")}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: screenWidth - 32,
            backgroundColor: "#E8FCE8",
            paddingVertical: 20,
            paddingHorizontal: 16,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#EB5D72",
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: "#EB5D72",
            }}
          >
            Live Chat
          </Text>
          <Ionicons name="chatbubble-outline" size={20} color="#EB5D72" />
        </TouchableOpacity>

        {/* Call Agent Button */}
        <TouchableOpacity
          onPress={handleCallAgent}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: screenWidth - 32,
            backgroundColor: "#E8FCE8",
            paddingVertical: 20,
            paddingHorizontal: 16,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#EB5D72",
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#EB5D72",
            }}
          >
            Call Agent
          </Text>
          <Ionicons name="call-outline" size={20} color="#EB5D72" />
        </TouchableOpacity>

        {/* FAQs Button */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: screenWidth - 32,
            backgroundColor: "#E8FCE8",
            paddingVertical: 20,
            paddingHorizontal: 16,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#EB5D72",
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#EB5D72",
            }}
          >
            FAQs
          </Text>
          <Ionicons name="ios-list-outline" size={20} color="#EB5D72" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Support;
