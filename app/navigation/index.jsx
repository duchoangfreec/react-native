import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import SplashScreen from "app/screens/Onboarding/components/SplashScreen";
import WelcomeScreen from "app/screens/Onboarding/components/WelcomeScreen";
import InterestedScreen from "app/screens/Onboarding/components/InterestedScreen";
const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
  headerTitleAlign: "center",
  fontFamily: "Noto Sans JP",
};

const RootNavigation = () => {
  return (
    <NavigationContainer fallback={<Text>Loading…</Text>}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={globalScreenOptions}
        mode="modal"
        headerMode="none"
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Interested" component={InterestedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
