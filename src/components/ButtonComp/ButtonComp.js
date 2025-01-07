import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Animated } from "react-native";

function ButtonComp({
  onBack,
  onNext,
  disableBack = false,
  disableNext = false,
  percentage = 0,
  scrollToNext,
  navigation
}) {
  const size = 99;
  const strokeWidth = 6;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;

  const strokeDashoffset = progressAnimation.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
  });

  useEffect(() => {
    Animated.timing(progressAnimation, {
      toValue: percentage,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [percentage]);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <Pressable
        style={({ pressed }) => [
          styles.backButton,
          disableBack ? styles.disabledButton : null,
          pressed && !disableBack && styles.buttonPressed,
        ]}
        onPress={() => {
          if (!disableBack && onBack) {
            console.log("Back button pressed");
            onBack();
          }
        }}
        disabled={disableBack}
      >
        <Text style={[styles.backText, disableBack && styles.disabledText]}>
          Back
        </Text>
      </Pressable>

      {/* Next Button */}
      <Pressable
        style={({ pressed }) => [
          styles.nextButton,
          disableNext ? styles.disabledButton : null,
          pressed && !disableNext && styles.buttonPressed,
        ]}
        onPress={() => {
          if (!disableNext && scrollToNext) {
            console.log("Next button pressed");
            scrollToNext();
            navigation.navigate('login')
          }
        }}
        disabled={disableNext}
      >
        <Text style={[styles.nextText, disableNext && styles.disabledText]}>
          Next
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  backButton: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 12,
    width: "40%",
    borderRadius: 5,
    alignItems: "center",
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: "#EB5D72",
    paddingVertical: 12,
    width: "40%",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.8,
  },
  disabledButton: {
    backgroundColor: "#E0E0E0",
  },
  backText: {
    color: "#B0B0B0",
    fontSize: 16,
  },
  nextText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  disabledText: {
    color: "#A0A0A0",
  },
});

export default ButtonComp;
