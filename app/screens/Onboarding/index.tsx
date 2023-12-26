// screens/SplashScreen.js
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Logo } from "app/components/Icon";
import { TIME_2000_MS } from "app/constants/common";

const Onboarding = ({ navigation }) => {
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

export default Onboarding;
