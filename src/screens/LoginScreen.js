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
import { TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import InputText from "../components/InputText/InputText";
import MyButton from "../components/MyButton/MyButton";
import SocialMedia from "../components/SocialMedia/SocialMedia";

// Import assets
const imageOne = require("../../assets/edited_ui_image.jpeg");

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

function LoginScreen({ navigation }) {
  const [showPassWord, setShowPassWord] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading spinner

  const handleToggleViewPassWord = () => {
    setShowPassWord((prevShowPassWord) => !prevShowPassWord);
  };

  // const handleSignIn = async () => {
  //   try {
  //     if (validForm()) {
  //       setLoading(true); // Start loading
  //       const response = await fetch("https://sex-health-back-1.onrender.com/login", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           email,
  //           password,
  //         }),
  //       });

  //       if (!response.ok) {
  //         throw new Error("Invalid credentials. Please try again.");
  //       }

  //       const data = await response.json();
  //       console.log("Login successful:", data);

  //       if (data.token) {
  //         await AsyncStorage.setItem("userToken", data.token);
  //         console.log("Token stored successfully.");
  //       }

  //       navigation.navigate("MyTab");
  //       setLoading(false); // End loading
  //     }
  //   } catch (error) {
  //     setLoading(false); // End loading in case of error
  //     console.error("Error during login:", error.message);
  //     Alert.alert("Login Failed", error.message);
  //   }
  // };

  const handleSignIn = async () => {
    try {
      if (validForm()) {
        setLoading(true); // Start loading
        const response = await fetch("https://sex-health-back-1.onrender.com/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        if (!response.ok) {
          throw new Error("Invalid credentials. Please try again.");
        }

        const data = await response.json();
        console.log("Login successful:", data);

        if (data.token) {
          // Store token and role
          await AsyncStorage.setItem("userToken", data.token);
          if (data.data.role) {
            await AsyncStorage.setItem("userRole", data.data.role); // Save the user role
            console.log("Role stored successfully.");
          } else {
            console.error("Role not found in the response");
          }
          console.log("Token and role stored successfully.");

          // Navigate based on the role
          const role = data.data.role;
          if (role === "admin") {
            navigation.navigate("AdminTab");
          } else {
            navigation.navigate("MyTab");
          }
        } else {
          console.error("Token not found in the response");
        }

        setLoading(false); // Stop loading
      }
    } catch (error) {
      setLoading(false); // Stop loading on error
      console.error("Error during login:", error.message);
      Alert.alert("Login Failed", error.message);
    }
  };



  const validForm = () => {
    let valid = true;

    // Validate email
    if (!email || !email.includes("@")) {
      setEmailError("Please enter a valid email.");
      valid = false;
    } else {
      setEmailError(null);
    }

    // Validate password
    if (!password || password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      valid = false;
    } else {
      setPasswordError(null);
    }

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
        {/* Header Image */}
        <View
          style={{
            alignItems: "center",
            width: "40%",
            height: '20%',
            alignSelf: "center",
          }}
        >
          {/* <Image source={imageOne} style={{ resizeMode: "cover" }} /> */}
          <Image
            source={imageOne}
            style={{
              width: width * 0.4,  // 80% of the screen width
              height: height * 0.2, // 20% of the screen height
              resizeMode: "contain", // Ensures image is fully visible while preserving aspect ratio
            }}
          />

        </View>

        {/* Login Text */}
        <View
          style={{
            backgroundColor: "white",
            marginHorizontal: 10,
            marginVertical: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              textAlign: "center",
              color: "#EB5D72",
            }}
          >
            Login
          </Text>
          <Text
            style={{
              paddingLeft: 20,
              fontSize: 15,
              marginVertical: 10,
              textAlign: "center",
              color: "#BFBBBB",
            }}
          >
            Please sign in to continue
          </Text>
        </View>

        {/* Input Fields */}
        <View
          style={{
            marginHorizontal: 10,
            height: "35%",
          }}
        >
          <InputText
            label="Email"
            theme={{ colors: { primary: "#BFBBBB" } }}
            textColor="#BFBBBB"
            placeholderTextColor="#BFBBBB"
            value={email}
            onChangeText={setEmail}
            left={<TextInput.Icon icon="email" />}
          />
          {emailError && (
            <Text style={{ color: "red", marginHorizontal: 60 }}>
              {emailError.toString()}
            </Text>
          )}

          {/* Password Input */}
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
              {passwordError.toString()}
            </Text>
          )}

          <Pressable 
          onPress={() => navigation.navigate("forgotPassword ")}>
            <Text
              style={{
                color: "#EB5D72",
                alignSelf: "flex-end",
                fontWeight: 500,
                fontSize: 17,
                paddingVertical: 6,
              }}
            >
              Forgot Password
            </Text>
          </Pressable>

          {/* Login Button */}
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

        {/* Social Media Sign-in */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              borderColor: "#BFBBBB",
              borderWidth: 0.2,
              margin: 18,
              width: 100,
            }}
          ></View>
          <Text style={{ color: "black", marginTop: 5, fontSize: 18 }}>
            or sign in with
          </Text>
          <View
            style={{
              borderColor: "#BFBBBB",
              borderWidth: 0.2,
              margin: 18,
              width: 100,
            }}
          ></View>
        </View>

        <View style={{ marginVertical: 1 }}>
          <SocialMedia />
        </View>

        {/* Sign-Up Link */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "white",
            margin: 18,
            marginTop: 50,
            gap: 20,
          }}
        >
          <Text style={{ color: "#BFBBBB" }}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ color: "#EB5D72", fontWeight: "800" }}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

export default LoginScreen;
