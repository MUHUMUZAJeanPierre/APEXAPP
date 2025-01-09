import {
  View,
  Text,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import InputText from "../InputText/InputText";
import MyButton from "../MyButton/MyButton";
import { IconButton, TextInput } from "react-native-paper";
import SocialMedia from "../SocialMedia/SocialMedia";

const ImageOne = require("../../../assets/edited_ui_image.jpeg");
const facebook = require("../../../assets/facebook (1).png");
const google = require("../../../assets/google.png");

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const SignUp = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassWord, setShowPassWord] = useState(false);
  const handleToggleViewPassWord = () => {
    setShowPassWord((prevShowPassWord) => !prevShowPassWord);
  };

  const [fullNameError, setFullNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let isValid = true;

    // Validate full name
    if (!fullName.trim()) {
      setFullNameError("Full name is required.");
      isValid = false;
    } else {
      setFullNameError(null);
    }

    // Validate email
    if (!email || !email.includes("@")) {
      setEmailError("Please enter a valid email.");
      isValid = false;
    } else {
      setEmailError(null);
    }

    // Validate password
    if (!password || password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      isValid = false;
    } else {
      setPasswordError(null);
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      isValid = false;
    } else {
      setConfirmPasswordError(null);
    }

    return isValid;
  };

  const handleSignUp = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      const response = await fetch("https://sex-health-back-1.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to sign up. Please try again.");
      }

      const data = await response.json();
      console.log("Sign-up successful:", data);

      // Navigate to Login screen
      Alert.alert("Success", "Account created successfully!");
      navigation.navigate("login");
      setLoading(false);
    } catch (error) {
      console.error("Sign-up error:", error.message);
      Alert.alert("Error", error.message);
      setLoading(false);
    }
  };

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

        <IconButton
          icon="arrow-left"
          size={24}
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 40, left: 10 }}
          color="#EB5D72"
        />
        {/* Header Image */}
        <View
          style={{
            backgroundColor: "white",
            alignItems: "center",
            width: "40%",
            alignSelf: "center",
          }}
        >
          {/* <Image source={ImageOne} /> */}
          <Image
            source={ImageOne}
            style={{
              width: width * 0.4,  // 80% of the screen width
              height: height * 0.2, // 20% of the screen height
              resizeMode: "contain", // Ensures image is fully visible while preserving aspect ratio
            }}
          />
        </View>

        {/* Sign Up Header */}
        <View style={{ backgroundColor: "white", marginHorizontal: 10 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              textAlign: "center",
              color: "#EB5D72",
            }}
          >
            Sign Up
          </Text>
          <Text
            style={{
              color: "#BFBBBB",
              fontSize: 15,
              textAlign: "center",
              marginVertical: 10,
            }}
          >
            Create an account to continue
          </Text>
        </View>

        {/* Input Fields */}
        <View
          style={{
            marginHorizontal: 10,
            backgroundColor: "white",
          }}
        >
          <InputText
            label="Full Name"
            theme={{ colors: { primary: "#BFBBBB" } }}
            left={<TextInput.Icon icon="account-circle" />}
            value={fullName}
            onChangeText={setFullName}
          />
          {fullNameError && (
            <Text style={{ color: "red", marginHorizontal: 60 }}>
              {fullNameError}
            </Text>
          )}

          <InputText
            label="Email"
            theme={{ colors: { primary: "#BFBBBB" } }}
            left={<TextInput.Icon icon="email" />}
            value={email}
            onChangeText={setEmail}
          />
          {emailError && (
            <Text style={{ color: "red", marginHorizontal: 60 }}>
              {emailError}
            </Text>
          )}

          <InputText
            label="Password"
            theme={{ colors: { primary: "#BFBBBB" } }}
            textColor="#BFBBBB"
            placeholderTextColor="#BFBBBB"
            value={password}
            onChangeText={setPassword}
            left={<TextInput.Icon icon="lock" />}
            right={
              <TextInput.Icon
                icon={showPassWord ? "eye-off" : "eye"}
                onPress={handleToggleViewPassWord}
              />
            }
            secureTextEntry={!showPassWord}
          />
          {passwordError && (
            <Text style={{ color: "red", marginHorizontal: 60 }}>
              {passwordError}
            </Text>
          )}

          {/* <InputText
            secureTextEntry={true}
            left={<TextInput.Icon icon="lock" />}
          /> */}
          <InputText
            label="Confirm Password"
            theme={{ colors: { primary: "#BFBBBB" } }}
            textColor="#BFBBBB"
            placeholderTextColor="#BFBBBB"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            left={<TextInput.Icon icon="lock" />}
            right={
              <TextInput.Icon
                icon={showPassWord ? "eye-off" : "eye"}
                onPress={handleToggleViewPassWord}
              />
            }
            secureTextEntry={!showPassWord}
          />
          {confirmPasswordError && (
            <Text style={{ color: "red", marginHorizontal: 60 }}>
              {confirmPasswordError}
            </Text>
          )}

          <MyButton
            onPress={handleSignUp}
            title={loading ? "Signing Up..." : "Sign up"}
            style={{
              backgroundColor: "#EB5D72",
              borderRadius: 8,
              justifyContent: "center",
              marginTop: 15,
            }}
            disabled={loading}
          />
        </View>

        {/* Divider and Social Media */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            // marginBottom: 15,
          }}
        >
          <View
            style={{
              borderColor: "#BFBBBB",
              borderWidth: 0.2,
              width: 100,
            }}
          ></View>
          <Text style={{ color: "black", fontSize: 18 }}>or sign in with</Text>
          <View
            style={{
              borderColor: "#BFBBBB",
              borderWidth: 0.2,
              width: 100,
            }}
          ></View>
        </View>
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: "#3B5998",
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 5,
            }}
          >
            <Image source={facebook} style={{ width: "50%", height: "50%" }} />
          </View>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: "whit",
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 5,
            }}
          >
            <Image source={google} style={{ width: "50%", height: "50%" }} />
          </View>
        </View> */}
        <SocialMedia />

        {/* Login Link */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginBottom: 20,
            gap: 20,
            backgroundColor: "white",
          }}
        >
          <Text style={{ color: "#BFBBBB" }}>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate("login")}>
            <Text
              style={{
                color: "#EB5D72",
                fontWeight: "800",
                textAlign: "center",
                marginLeft: 5,
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
