import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { TextInput, IconButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import InputText from "../components/InputText/InputText";
import MyButton from "../components/MyButton/MyButton";
import SocialMedia from "../components/SocialMedia/SocialMedia";

const imageOne = require("../../assets/edited_ui_image.jpeg");

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

function LoginScreen({ navigation }) {
  const [showPassWord, setShowPassWord] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleToggleViewPassWord = () => {
    setShowPassWord((prevShowPassWord) => !prevShowPassWord);
  };

  const handleSignIn = async () => {
    try {
      if (validForm()) {
        setLoading(true);
        const response = await fetch("https://sex-health-back-1.onrender.com/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          throw new Error("Invalid credentials. Please try again.");
        }

        const data = await response.json();

        if (data.token) {
          await AsyncStorage.setItem("userToken", data.token);
          if (data.data.role) {
            await AsyncStorage.setItem("userRole", data.data.role);
            navigation.navigate(data.data.role === "admin" ? "AdminTab" : "MyTab");
          }
        }
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      Alert.alert("Login Failed", error.message);
    }
  };

  const validForm = () => {
    let valid = true;
    if (!email || !email.includes("@")) {
      setEmailError("Please enter a valid email.");
      valid = false;
    } else setEmailError(null);

    if (!password || password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      valid = false;
    } else setPasswordError(null);

    return valid;
  };

  return (
    <ScrollView>
      <View
        style={{
          height: height,
          width: width,
          backgroundColor: "white",
          paddingTop: 80,
        }}
      >
        {/* Go Back Icon */}
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
            alignItems: "center",
            width: "40%",
            height: "20%",
            alignSelf: "center",
          }}
        >
          <Image
            source={imageOne}
            style={{
              width: width * 0.4,
              height: height * 0.2,
              resizeMode: "contain",
            }}
          />
        </View>

        {/* Login Text */}
        <View style={{ backgroundColor: "white", marginHorizontal: 10, marginVertical: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 25, textAlign: "center", color: "#EB5D72" }}>
            Login
          </Text>
          <Text style={{ paddingLeft: 20, fontSize: 15, marginVertical: 10, textAlign: "center", color: "#BFBBBB" }}>
            Please sign in to continue
          </Text>
        </View>

        {/* Input Fields */}
        <View style={{ marginHorizontal: 10, height: "35%" }}>
          <InputText
            label="Email"
            theme={{ colors: { primary: "#BFBBBB" } }}
            textColor="#BFBBBB"
            placeholderTextColor="#BFBBBB"
            value={email}
            onChangeText={setEmail}
            left={<TextInput.Icon icon="email" />}
          />
          {emailError && <Text style={{ color: "red", marginHorizontal: 60 }}>{emailError}</Text>}

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
          {passwordError && <Text style={{ color: "red", marginHorizontal: 60 }}>{passwordError}</Text>}

          <Pressable onPress={() => navigation.navigate("forgotPassword")}>
            <Text style={{ color: "#EB5D72", alignSelf: "flex-end", fontWeight: 500, fontSize: 17, paddingVertical: 6 }}>
              Forgot Password
            </Text>
          </Pressable>

          <MyButton
            title={loading ? "Loading..." : "Log in"}
            onPress={handleSignIn}
            disabled={loading}
            style={{
              backgroundColor: "#EB5D72",
              height: "17%",
              marginTop: 9,
              borderRadius: 8,
              justifyContent: "center",
            }}
          />
        </View>

        {/* Social Media and Sign-Up Section */}
        <View>
          <SocialMedia />
          <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 50, gap: 20 }}>
            <Text style={{ color: "#BFBBBB" }}>Don't have an account?</Text>
            <Pressable onPress={() => navigation.navigate("SignUp")}>
              <Text style={{ color: "#EB5D72", fontWeight: "800" }}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default LoginScreen;
