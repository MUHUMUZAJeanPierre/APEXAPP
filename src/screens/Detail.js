// import React from "react";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";

// function Detail({ route, navigation }) {
//   const { item } = route.params;

//   return (
//     <ScrollView style={styles.container}>
//       <Image source={item.image} style={styles.image} />
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.description}>{item.description}</Text>

//       <TouchableOpacity
//         style={styles.backButton}
//         onPress={() => navigation.goBack()}
//       >
//         <Text style={styles.backButtonText}>Go Back</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F8F8F8",
//     padding: 20,
//   },
//   image: {
//     width: "100%",
//     height: 200,
//     borderRadius: 15,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 10,
//   },
//   description: {
//     fontSize: 16,
//     color: "#777",
//     lineHeight: 24,
//   },
//   backButton: {
//     marginTop: 20,
//     backgroundColor: "#EB5D72",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   backButtonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default Detail;


import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import img from '../../assets/segment_1.png';

export default function Detail({ route, navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View>
          <Image source={img} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Let me know if you need more or specific edits!</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  scrollContent: {
    paddingBottom: 20, 
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    backgroundColor: "red",
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 10,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#EB5D72",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#EB5D72",
    padding: 15,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
