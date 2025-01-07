import React from "react";
import { Dimensions, View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MyButton from "../components/MyButton/MyButton";
import InputText from "../components/InputText/InputText";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

function EditProfile({ route }) {
  // Replace the red, green, and other placeholder colors with your Profile screen colors

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          height: height,
          width: width,
          backgroundColor: "#EB5D72", 
          // marginTop:10
        }}
      >
        {/* Header Section */}
        <View
          style={{
            backgroundColor: "#EB5D72",
            height: 400,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 120,
              width: 120,
              backgroundColor: "white",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 60,
              borderWidth: 4,
              borderColor: "#EB5D72",
            }}
          >
            <Ionicons name="person" size={80} color="#EB5D72" />
          </View>
          <Text
            style={{
              marginTop: 16,
              fontSize: 16,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Change Picture
          </Text>
        </View>

        {/* Form Section */}
        <View
          style={{
            backgroundColor: "white",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 20,
            marginTop: -20,
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 16, marginBottom: 8 }}>
            Full Name
          </Text>
          <InputText
            theme={{ colors: { primary: "transparent" } }}
            textColor="#BFBBBB"
            placeholderTextColor="#BFBBBB"
            style={{
              height: 50,
              borderWidth: 1,
              borderColor: "#DADADA",
              borderRadius: 10,
              marginBottom: 20,
              paddingHorizontal: 10,
            }}
            placeholder="Enter your full name"
          />

          <Text style={{ fontWeight: "500", fontSize: 16, marginBottom: 8 }}>
            Email Address
          </Text>
          <InputText
            theme={{ colors: { primary: "transparent" } }}
            textColor="#BFBBBB"
            placeholderTextColor="#BFBBBB"
            style={{
              height: 50,
              borderWidth: 1,
              borderColor: "#DADADA",
              borderRadius: 10,
              marginBottom: 30,
              paddingHorizontal: 10,
            }}
            placeholder="Enter your email address"
          />

          {/* Update Button */}
          <MyButton
            title="Update"
            onPress={() => {
              console.log("Profile updated");
            }}
            style={{
              height: 52,
              width: "100%",
              alignSelf: "center",
              backgroundColor: "#EB5D72",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
            textStyle={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default EditProfile;
