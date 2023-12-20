import React from "react";
import { Button } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's about screen"
      onPress={() => navigation.navigate("About", { name: "Jane" })}
    />
  );
};

export default ProfileScreen;
