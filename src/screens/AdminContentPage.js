import React, { useState } from "react";
import { View, Text, Dimensions, Image, Pressable, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MyButton from "../components/MyButton/MyButton";
import InputText from "../components/InputText/InputText";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const AddContentPage = ({ navigation }) => {
  const [harvest, setHarvest] = useState(
    "https://imagetolink.com/ib/cF5LuxR0qn.png"
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");

  const handlePost = async () => {
    if (!title || !description || !cost || !harvest) {
      Alert.alert("Error", "All fields are required!");
      return;
    }
    try {
      const response = await addDoc(collection(FIREBASE_DB, "farmerHarvest"), {
        title,
        description,
        cost,
        harvest,
      });
      Alert.alert("Success", "Harvest added successfully!");
      navigation.navigate("Home", { docId: response.id });
    } catch (error) {
      Alert.alert("Error", "Failed to add harvest. Try again later.");
      console.error(error);
    }
  };

  const handleUploadImage = async () => {
    try {
      await requestMediaLibraryPermissionsAsync();
      let result = await launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });
      if (!result.canceled) {
        const imgUri = result.assets[0].uri;
        setHarvest(imgUri);
        const timestamp = Date.now();
        const imageRef = ref(storage, `harvestImages/${timestamp}`);
        const response = await fetch(imgUri);
        const blob = await response.blob();
        await uploadBytes(imageRef, blob);
        const url = await getDownloadURL(imageRef);
        setHarvest(url);
        Alert.alert("Success", "Image uploaded successfully!");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to upload image.");
      console.error(error);
    }
  };

  return (
    <View style={{ height, width, backgroundColor: "#f5f5f5", padding: 20 }}>
      {/* Header Section */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#333" />
        </Pressable>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 10,
            color: "#333",
          }}
        >
          Add New Harvest
        </Text>
      </View>

      {/* Image Upload Section */}
      <View style={{ marginBottom: 20, alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Upload Image
        </Text>
        <Pressable
          onPress={handleUploadImage}
          style={{
            width: 160,
            height: 160,
            borderRadius: 10,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            elevation: 2,
          }}
        >
          <Image
            source={{ uri: harvest }}
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
          />
        </Pressable>
      </View>

      {/* Input Fields Section */}
      <View style={{ marginBottom: 20 }}>
        <InputText
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          style={{
            marginBottom: 10,
            backgroundColor: "#fff",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
          }}
        />
        <InputText
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          style={{
            marginBottom: 10,
            backgroundColor: "#fff",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
          }}
        />
        <InputText
          placeholder="Cost"
          value={cost}
          onChangeText={setCost}
          style={{
            marginBottom: 10,
            backgroundColor: "#fff",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
          }}
        />
      </View>

      {/* Submit Button */}
      <MyButton
        title="Submit"
        onPress={handlePost}
        style={{
          backgroundColor: "#EB5D72",
          borderRadius: 8,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </View>
  );
};

export default AddContentPage;
