import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import InputText from "../InputText/InputText";
import MyButton from "../MyButton/MyButton";
import SocialMedia from "../SocialMedia/SocialMedia";

// Import assets
const imageOne = require("../../../assets/login.webp");

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

function Login({ navigation }) {
  const [showPassWord, setShowPassWord] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const dropdownItems = [
    { label: "Farmer specialist", value: "option1" },
    { label: "Farmer", value: "option2" },
    { label: "Customer", value: "option3" },
  ];

  const handleToggleViewPassWord = () => {
    setShowPassWord((prevShowPassWord) => !prevShowPassWord);
  };

  const handleSignIn = async () => {
    try {
      if (validForm()) {
        // Placeholder for sign-in logic
        navigation.navigate("MyTab");
        console.log("Sign-in successful");
      }
    } catch (error) {
      console.error(error);
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
          paddingTop: 65,
        }}
      >
        {/* Header Image */}
        <View
          style={{
            alignItems: "center",
            width: "40%",
            alignSelf: "center",
          }}
        >
          {/* <Image source={imageOne} style={{ resizeMode: "cover" }} /> */}
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

          {/* Forgot Password */}
          <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
            <Text
              style={{
                color: "#EB5D72",
                alignSelf: "flex-end",
                fontWeight: "500",
                fontSize: 17,
                paddingVertical: 6,
              }}
            >
              Forgot Password
            </Text>
          </Pressable>

          {/* Login Button */}
          <MyButton
            title="Log in"
            onPress={handleSignIn}
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

export default Login;
