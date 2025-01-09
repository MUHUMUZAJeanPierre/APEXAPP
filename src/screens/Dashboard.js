import React from "react";
import { View, Text, FlatList, Pressable, Alert, Dimensions, ScrollView } from "react-native";
import { BarChart } from "react-native-chart-kit";
import Icon from "react-native-vector-icons/MaterialIcons";

const users = [
    { id: "1", title: "Offline Event", description: "Health Parameter." },
    { id: "2", title: "Online Event", description: "Mental Health Workshop" },
    { id: "3", title: "Offline Event", description: "Community Health Camp" },
];

const chartData = {
    labels: ["Admins", "Editors", "Viewers"],
    datasets: [
        {
            data: [2, 4, 8],
        },
    ],
};

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    backgroundGradientFrom: "#f5f5f5",
    backgroundGradientTo: "#f5f5f5",
    color: (opacity = 1) => `rgba(75, 192, 192, ${opacity})`,
    barPercentage: 0.6,
};

const Dashboard = ({ navigation }) => {
    const handleEditUser = (id) => {
        navigation.navigate("EditProfile", { userId: id });
    };

    const handleDeleteUser = (id) => {
        Alert.alert(
            "Delete User",
            "Are you sure you want to delete this user?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        console.log(`User with ID ${id} deleted`);
                    },
                },
            ],
            { cancelable: true }
        );
    };

    const handleAddContent = () => {
        navigation.navigate("AddNewEvent"); 
    };

    const renderItem = ({ item }) => (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#fff",
                padding: 15,
                borderRadius: 10,
                marginBottom: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 2,
            }}
        >
            <View>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}>
                    {item.title}
                </Text>
                <Text style={{ fontSize: 14, color: "#777" }}>{item.description}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Pressable onPress={handleAddContent}>
                    <Icon name="add-circle" size={30} color="#EB5D72" />
                </Pressable>
                <Pressable
                    style={{ marginHorizontal: 10 }}
                    onPress={() => handleEditUser(item.id)}
                >
                    <Icon name="edit" size={24} color="#4CAF50" />
                </Pressable>
                <Pressable
                    style={{ marginHorizontal: 10 }}
                    onPress={() => handleDeleteUser(item.id)}
                >
                    <Icon name="delete" size={24} color="#F44336" />
                </Pressable>
            </View>
        </View>
    );

    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: "#f5f5f5",
                paddingHorizontal: 20,
                paddingTop: 30,
                marginTop: 30,
            }}
        >
            {/* Header */}
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 20,
                }}
            >
                <Text
                    style={{
                        fontSize: 22,
                        fontWeight: 500,
                        color: "#333",
                        textAlign: "center",
                        marginBottom: 10,
                        color: "#EB5D72",
                    }}
                >
                    Event Management Dashboard
                </Text>

            </View>

            {/* Bar Chart */}
            <View
                style={{
                    marginBottom: 30,
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    padding: 10,
                    elevation: 2,
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        marginBottom: 10,
                        textAlign: "center",
                        color: "#EB5D72",
                    }}
                >
                    Event Distribution
                </Text>
                <BarChart
                    data={chartData}
                    width={screenWidth - 40}
                    height={220}
                    chartConfig={chartConfig}
                    verticalLabelRotation={0}
                    style={{ borderRadius: 10 }}
                />
            </View>

            {/* User List */}
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </ScrollView>
    );
};

export default Dashboard;
