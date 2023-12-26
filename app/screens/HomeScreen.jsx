import React, { useLayoutEffect } from "react";
import { Button, View, Text, SafeAreaView, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  selectCount,
} from "app/store/reducer/slice/counterSlice";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  // log.info("This is some test information");
  console.log("HomeScreen");
  const count = useSelector((state) => state.counter.value);
  const count2 = useSelector(selectCount);
  const dispatch = useDispatch();
  const handlePress = () => {
    console.log("handlePress");
    navigation.navigate("Profile", { name: "Jane" });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate("Profile", { name: "Jane" })}
          title="Update count"
        />
      ),
    });
  }, []);

  return (
    <SafeAreaView>
      {/* <Provider store={store}> */}
      <Button title="Go to Jane's profile" onPress={handlePress} />
      {/* <View>{count}</View> */}
      <Text>{count}</Text>
      <Text>{count2}</Text>
      <Button title="increment" onPress={() => dispatch(increment())} />
      <Button title="decrement" onPress={() => dispatch(decrement())} />

      {/* </Provider> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
