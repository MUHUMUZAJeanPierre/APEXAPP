import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, Image, Pressable, Alert } from "react-native";
import {
  launchImageLibraryAsync,
  requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";
import MyButton from "../components/MyButton/MyButton";
import InputText from "../components/InputText/InputText";

function AddNewEvent({ navigation }) {
  const [img, setImg] = useState("https://imagetolink.com/ib/cF5LuxR0qn.png");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlePost = async () => {
    if (!title.trim() || !description.trim() || !img) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    const newEvent = {
      title,
      description,
      image: img,
    };

    try {
      const response = await fetch("https://sex-health-back-1.onrender.com/action", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      if (response.ok) {
        const result = await response.json();
        Alert.alert("Success", "Event added successfully!");
        setTitle("");
        setDescription("");
        setImg("https://imagetolink.com/ib/cF5LuxR0qn.png");
        navigation.goBack();
      } else {
        const errorData = await response.json();
        Alert.alert("Error", errorData.message || "Failed to add event.");
      }
    } catch (error) {
      console.error("Error adding event:", error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  const handleUploadImage = async () => {
    const { status } = await requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "We need media library permissions to proceed.");
      return;
    }

    const result = await launchImageLibraryAsync({
      mediaTypes: "Images",
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImg(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      {/* Header */}
      <View
        style={{
          backgroundColor: "#EB5D72",
          height: 120,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={30}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          Add New Event
        </Text>
      </View>

      {/* Image Upload */}
      <View
        style={{
          backgroundColor: "white",
          margin: 15,
          borderRadius: 10,
          padding: 15,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          elevation: 3,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333", marginBottom: 10 }}>
          Upload Image
        </Text>
        <Pressable
          onPress={handleUploadImage}
          style={{
            width: "100%",
            height: 200,
            borderRadius: 10,
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F0F0F0",
          }}
        >
          <Image
            source={{ uri: img }}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Pressable>
      </View>

      {/* Input Fields */}
      <View
        style={{
          backgroundColor: "white",
          margin: 15,
          borderRadius: 10,
          padding: 15,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          elevation: 3,
        }}
      >
        <InputText
          label=""
          underlineColor="transparent"
          placeholder="Event Title"
          value={title}
          onChangeText={(e) => setTitle(e)}
          style={{
            width: "100%",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#DDD",
            padding: 10,
            marginBottom: 15,
            backgroundColor: "#FAFAFA",
          }}
        />
        <InputText
          label=""
          underlineColor="transparent"
          placeholder="Event Description"
          value={description}
          onChangeText={setDescription}
          style={{
            width: "100%",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#DDD",
            padding: 10,
            height: 100,
            backgroundColor: "#FAFAFA",
            textAlignVertical: "top",
          }}
          multiline
        />
      </View>

      {/* Submit Button */}
      <View style={{ margin: 15 }}>
        <MyButton
          title="Submit"
          onPress={handlePost}
          style={{
            height: 60,
            backgroundColor: "#EB5D72",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
          }}
        />
      </View>
    </View>
  );
}

export default AddNewEvent;
