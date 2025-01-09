import React from "react";
import { View, Alert, StyleSheet } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons"; // Correct import from Expo
import Profile from "../../screens/Profile";
import UserBottom from "../BottomNavigation/UserBottom";
import LoginScreen from "../../screens/LoginScreen";
import AdminTabBottom from "../BottomNavigation/AdminTabBottom";
import SignUp from "../../components/SignUp/SignUp";

const Drawer = createDrawerNavigator();

const handleLogout = (navigation) => {
    Alert.alert(
        "Logout",
        "Are you sure you want to log out?",
        [
            {
                text: "Cancel",
                style: "cancel",
            },
            {
                text: "Logout",
                style: "destructive",
                onPress: () => {
                    // Clear user session logic here (e.g., AsyncStorage, Redux state, etc.)
                    // Navigate to the login screen
                    navigation.reset({
                        index: 0,
                        routes: [{ name: "Login" }],
                    });
                },
            },
        ],
        { cancelable: true }
    );
};

// Custom Drawer Content to style the Logout button at the bottom
const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
            {/* Default Drawer Items */}
            <DrawerItemList {...props} />

            {/* Spacer to push Logout to the bottom */}
            <View style={styles.spacer} />

            {/* Logout Button */}
            <DrawerItem
                label="Logout"
                onPress={() => handleLogout(props.navigation)}
                icon={({ color, size }) => (
                    <Ionicons name="exit-outline" size={size} color={color} />
                )}
                labelStyle={styles.logoutLabel}
                style={styles.logoutItem}
            />
        </DrawerContentScrollView>
    );
};

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerActiveTintColor: "#EB5D72",
                drawerInactiveTintColor: "gray",
                drawerStyle: {
                    backgroundColor: "white",
                },
                drawerShadow: false, // Disable shadow
            }}
        >
            <Drawer.Screen
                name="Admin Panel"
                component={UserBottom}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="settings-outline" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Admin User"
                component={AdminTabBottom}
                options={{
                    drawerItemStyle: { display: "none" },
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="settings-outline" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="login"
                component={LoginScreen}
                options={{
                    headerShown: false,
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    headerShown: false,
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    spacer: {
        flex: 1, // Pushes the Logout button to the bottom
    },
    logoutItem: {
        borderTopWidth: 1,
        borderTopColor: "#ddd",
    },
    logoutLabel: {
        fontWeight: "bold",
        color: "#EB5D72",
    },
});

export default DrawerNavigator;
