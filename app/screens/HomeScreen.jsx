import React from "react";
import { Button, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  selectCount,
} from "app/store/reducer/slice/counterSlice";

import { useEffect } from "react";
import AboutScreen from "app/screens/AboutScreen";

const HomeScreen = ({ navigation }) => {
  // log.info("This is some test information");
  console.log("HomeScreen");
  const count = useSelector((state) => state.counter.value);
  const count2 = useSelector(selectCount);
  const dispatch = useDispatch();
  const handlePress = () => {
    console.log("handlePress");
    navigation.navigate("Profile", { name: "Jane" });
  };

  // useEffect(() => {\
  //   alert(NEXTAUTH_URL);
  // }, []);
  return (
    <>
      {/* <Provider store={store}> */}
      <Button title="Go to Jane's profile" onPress={handlePress} />
      {/* <View>{count}</View> */}
      <Text>{count}</Text>
      <Text>{count2}</Text>
      <Button title="increment" onPress={() => dispatch(increment())} />
      <Button title="decrement" onPress={() => dispatch(decrement())} />
      {/* </Provider> */}
      <AboutScreen />
    </>
  );
};

export default HomeScreen;
