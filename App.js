import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "./app/store";
import RootNavigation from "./app/navigation";
const helmetContext = {};

const App = () => {
  return (
    <>
      <Provider store={store}>
        <HelmetProvider context={helmetContext}>
          <Helmet>
            <script src="http://localhost:8097"></script>
            <title>Travel App</title>
          </Helmet>
          <RootNavigation />
        </HelmetProvider>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
    top: 50,
  },
  text: {
    fontSize: 42,
  },
});

export default App;
