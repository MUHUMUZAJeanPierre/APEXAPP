import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../../screens/HomeScreen";
import Profile from "../../screens/Profile";
import Dashboard from "../../screens/Dashboard";
import DashboardHealthCourse from "../../screens/DashHealthCourse";

// Import icons
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import DashUser from "../../screens/DashUser";

// Create bottom tab navigator
const Tab = createBottomTabNavigator();

// Admin Bottom Tab Navigator
function AdminTabBottom() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#EB5D72",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="Event"
        component={Dashboard} // Admin dashboard
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="analytics" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Health"
        component={DashboardHealthCourse}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heartbeat" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={DashUser} // Admin user management
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="users" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AdminTabBottom;
