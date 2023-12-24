import React from "react";
import { Button, View } from "react-native";

const AboutScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Jane's Home screen"
        onPress={() => navigation.navigate("Home", { name: "Jane" })}
      />
    </View>
  );
};

export default AboutScreen;
