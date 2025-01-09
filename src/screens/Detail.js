import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";

export default function Detail({ route, navigation }) {
  const { id } = route.params; // Extracting ID passed from navigation
  const [data, setData] = useState(null); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to handle errors

  // Fetch data by ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://sex-health-back-1.onrender.com/health/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  // Show loading indicator or error
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
        <ActivityIndicator size="large" color="#EB5D72" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
        <Text style={{ color: "red", fontSize: 16, textAlign: "center", marginBottom: 20 }}>{error}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#EB5D72",
            padding: 15,
            borderRadius: 10,
            alignItems: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View>
          {/* Displaying image dynamically if available */}
          {data.imageUrl ? (
            <Image
              source={{ uri: data.imageUrl }}
              style={{
                width: "100%",
                height: 250,
                resizeMode: "cover",
                borderRadius: 20,
                elevation: 10,
              }}
            />
          ) : (
            <Image
              source={require("../../assets/segment_1.png")}
              style={{
                width: "100%",
                height: 250,
                resizeMode: "cover",
                borderRadius: 20,
                elevation: 10,
              }}
            />
          )}
        </View>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#EB5D72", marginBottom: 15 }}>
            {data.title}
          </Text>
          <Text style={{ fontSize: 16, color: "#555", lineHeight: 24 }}>{data.description}</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#EB5D72",
            padding: 15,
            marginHorizontal: 20,
            marginTop: 10,
            borderRadius: 10,
            alignItems: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Go Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
