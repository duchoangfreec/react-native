import React from "react";
import { Button } from "react-native";

const AboutScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's Home screen"
      onPress={() => navigation.navigate("Home", { name: "Jane" })}
    />
  );
};

export default AboutScreen;
