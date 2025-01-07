import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { TextInput } from "react-native-paper";
import InputText from "../components/InputText/InputText";
import MyButton from "../components/MyButton/MyButton";

// const imageOne = require("../../../assets/forgetPasswordImage.png");

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [loading, setLoading] = useState(false);

  // const validateForm = () => {
  //   if (!email || !email.includes("@")) {
  //     setEmailError("Please enter a valid email.");
  //     return false;
  //   } else {
  //     setEmailError(null);
  //   }
  //   return true;
  // };

  // const handleSendResetLink = async () => {
  //   if (!validateForm()) return;

  //   try {
  //     setLoading(true);
  //     // Replace the URL below with your API endpoint
  //     const response = await fetch("http://your-api-url/api/users/forgot-password", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to send reset link. Please try again.");
  //     }

  //     const data = await response.json();
  //     Alert.alert("Success", "Password reset link sent to your email.");
  //     setLoading(false);

  //     // Navigate back to the Login screen
  //     navigation.navigate("Login");
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //     Alert.alert("Error", error.message);
  //     setLoading(false);
  //   }
  // };

  return (
    <ScrollView>
      <View
        style={{
          height: height,
          width: width,
          backgroundColor: "white",
          paddingTop: 65,
        }}
      >
        {/* Header Image */}
        <View
          style={{
            alignItems: "center",
            width: "60%",
            alignSelf: "center",
          }}
        >
          {/* <Image source={imageOne} style={{ resizeMode: "contain" }} /> */}
        </View>

        {/* Title and Instructions */}
        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 28,
              textAlign: "center",
              color: "#EB5D72",
            }}
          >
            Forgot Password?
          </Text>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              color: "#BFBBBB",
              marginTop: 10,
            }}
          >
            Enter your email address below to receive a password reset link.
          </Text>
        </View>

        {/* Email Input Field */}
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <InputText
            label="Email Address"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            theme={{ colors: { primary: "#BFBBBB" } }}
            left={<TextInput.Icon icon="email" />}
          />
          {emailError && (
            <Text style={{ color: "red", marginHorizontal: 10 }}>
              {emailError}
            </Text>
          )}
        </View>

        {/* Send Reset Link Button */}
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <MyButton
            title={loading ? "Sending..." : "Send Reset Link"}
            onPress={handleSendResetLink}
            disabled={loading}
            style={{
              backgroundColor: "#EB5D72",
              borderRadius: 8,
              justifyContent: "center",
            }}
          />
        </View>

        {/* Back to Login */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ color: "#BFBBBB" }}>Remembered your password?</Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                color: "#EB5D72",
                fontWeight: "bold",
                marginLeft: 5,
              }}
            >
              Log in
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgetPassword;
