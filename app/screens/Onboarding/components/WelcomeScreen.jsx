// screens/SplashScreen.js
import React, { useEffect, useLayoutEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Logo } from "app/components/Icon";
import { TIME_2000_MS } from "app/constants/common";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    // Simulate loading or perform any initial tasks
    const timeoutId = setTimeout(() => {
      navigation.replace("Interested"); // Navigate to the main screen
    }, TIME_2000_MS); // Adjust the duration as needed
    // Cleanup the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Logo width={64} height={64} />
      <Text style={{}}>Welcome to Taisee</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta
        nunc at mauris convallis, hendrerit venenatis purus dignissim.
      </Text>
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

export default WelcomeScreen;
