import { Helmet, HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "./app/store";
import RootNavigation from "./app/navigation";
import { PaperProvider } from "react-native-paper";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
SplashScreen.preventAutoHideAsync();

import {
  useFonts,
  NotoSansJP_400Regular,
} from "@expo-google-fonts/noto-sans-jp";
const helmetContext = {};

const App = () => {
  // const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;
  // const color = colorScheme === "light" ? Colors.darker : Colors.lighter;
  const [fontsLoaded, fontError] = useFonts({
    NotoSansJP_400Regular,
  });

  useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <PaperProvider>
          <HelmetProvider context={helmetContext}>
            <Helmet>
              <script src="http://localhost:8097"></script>
              <title>Travel App</title>
            </Helmet>
            <RootNavigation />
          </HelmetProvider>
        </PaperProvider>
      </Provider>
    </>
  );
};

export default App;
