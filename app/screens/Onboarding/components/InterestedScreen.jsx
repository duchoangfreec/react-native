// screens/SplashScreen.js
import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, StyleSheet, Text, Switch } from "react-native";
import { Logo } from "app/components/Icon";
import { TIME_2000_MS } from "app/constants/common";
import { useNavigation } from "@react-navigation/native";
import { Chip } from "react-native-paper";
import { useColorScheme } from "react-native";
const InterestedScreen = () => {
  const navigation = useNavigation();
  const [selectedList, setSelectedList] = useState([]);
  console.log(
    "🚀 ~ file: InterestedScreen.jsx:12 ~ InterestedScreen ~ selectedList:",
    selectedList
  );
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    // Simulate loading or perform any initial tasks
    // const timeoutId = setTimeout(() => {
    //   navigation.replace("Welcome"); // Navigate to the main screen
    // }, TIME_2000_MS); // Adjust the duration as needed
    // Cleanup the timeout when the component is unmounted
    // return () => clearTimeout(timeoutId);
  }, [navigation]);

  const interestList = {
    diy: "DIY",
    oddly_satisfying: "Oddly Satisfying",
    movies_tv: "Movies TV",
    stars: "Stars",
    family: "Family",
    beauty_style: "Beauty style",
    food_drink: "Food & Drink",
    outdoors: "Outdoors",
    art: "Art",
    science_education: "Science & Education",
    motivation_advice: "Motivation & Advice",
    anime_comics: "Anime & Comics",
    travel: "Travel",
    life_hacks: "Life Hacks",
    gaming: "Gaming",
    home_garden: "Home & Garden",
    dance: "Dance",
    fitness_health: "Fitness health",
    animals: "Animals",
    sports: "Sports",
    daily_life: "Daily Life",
    music: "Music",
    entertainment_culture: "Entertainment Culture",
    auto_vehicle: "Auto Vehicle",
    comedy: "Comedy",
  };
  const isDarkMode = useColorScheme() == "dark";
  //   const [isDark, setIsDark] = useState(isDarkMode);
  return (
    <View style={styles.container}>
      {/* <Switch value={isDark} onValueChange={(val) => setIsDark(val)} /> */}
      <Text style={{ marginBottom: 80 }}>What are you interested in?</Text>
      <View
        style={{
          display: "flex",
          gap: 8,
          width: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingHorizontal: 40,
        }}
      >
        {Object.entries(interestList)?.map(([key, value]) => {
          const selected = selectedList.includes(key);
          return (
            <Chip
              key={key}
              mode="outlined"
              textStyle={{
                color: selected ? "#fff" : "#000",
              }}
              selectedColor="#fff"
              style={{
                backgroundColor: selected ? "#9561F0" : "#fff",
                borderColor: selected ? "#9561F0" : "#ccc",
                ...styles.chipElement,
              }}
              onPress={() => setSelectedList([...selectedList, key])}
            >
              {value}
            </Chip>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 80,
    alignItems: "center",
  },
  chipElement: {
    borderRadius: 32,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
});

export default InterestedScreen;
