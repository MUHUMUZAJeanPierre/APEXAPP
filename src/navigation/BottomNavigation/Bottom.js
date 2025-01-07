import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../../screens/HomeScreen";
import Detail from "../../screens/Detail";
import Profile from "../../screens/Profile";
import Support from "../../screens/Support";
import Icon from "react-native-vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Animated, Easing, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

// Wrapper component to animate screens
function AnimatedScreen({ children }) {
  const animation = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: animation,
        transform: [
          {
            scale: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0.9, 1],
            }),
          },
        ],
      }}
    >
      {children}
    </Animated.View>
  );
}

function AnimatedIcon({ name, size, color, focused }) {
  const animation = React.useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: focused ? 1.2 : 1,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [focused]);

  return (
    <Animated.View style={{ transform: [{ scale: animation }] }}>
      <Ionicons name={name} size={size} color={color} />
    </Animated.View>
  );
}

// Admin Bottom Tab Navigator
function AdminBottom() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      const role = await AsyncStorage.getItem("userRole");
      setUserRole(role);
    };

    fetchUserRole();
  }, []);

  if (userRole === null) {
    return <LoadingScreen />;
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "##EB5D72",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "gray",
          borderTopWidth: 0,
          elevation: 5,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Dashboard") {
            iconName = focused ? "analytics" : "analytics-outline";
          } else if (route.name === "User Management") {
            iconName = "team";
          }

          return (
            <AnimatedIcon
              name={iconName}
              size={size}
              color={color}
              focused={focused}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        options={{ headerShown: false }}
      >
        {() => (
          <AnimatedScreen>
            <HomeScreen />
          </AnimatedScreen>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="User Management"
        options={{ headerShown: false }}
      >
        {() => (
          <AnimatedScreen>
            <Profile />
          </AnimatedScreen>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

// User Bottom Tab Navigator
function UserBottom() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#EB5D72",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "black",
          borderTopWidth: 0,
          elevation: 5,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Detail") {
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Support") {
            iconName = focused ? "help-circle" : "help-circle-outline";
          }

          return (
            <AnimatedIcon
              name={iconName}
              size={size}
              color={color}
              focused={focused}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        options={{ headerShown: false }}
      >
        {() => (
          <AnimatedScreen>
            <HomeScreen />
          </AnimatedScreen>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Detail"
        options={{ headerShown: false }}
      >
        {() => (
          <AnimatedScreen>
            <Detail />
          </AnimatedScreen>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        options={{ headerShown: false }}
      >
        {() => (
          <AnimatedScreen>
            <Profile />
          </AnimatedScreen>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Support"
        options={{ headerShown: false }}
      >
        {() => (
          <AnimatedScreen>
            <Support />
          </AnimatedScreen>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

// Main Navigator
function MainNavigator({ userRole }) {
  return <>{userRole === "admin" ? <AdminBottom /> : <UserBottom />}</>;
}

export default MainNavigator;
