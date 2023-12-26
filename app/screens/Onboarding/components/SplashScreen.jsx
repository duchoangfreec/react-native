// screens/SplashScreen.js
import React, { useEffect, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Logo } from "app/components/Icon";
import { TIME_2000_MS } from "app/constants/common";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    // Simulate loading or perform any initial tasks
    const timeoutId = setTimeout(() => {
      navigation.replace("Welcome"); // Navigate to the main screen
    }, TIME_2000_MS); // Adjust the duration as needed
    // Cleanup the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Logo width={100} height={100} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
