import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Detail = (props) => {
  return (
    <View>
      <Text>{props.route.params.screenName}</Text>
      <Button
        title="View Top Tabs"
        onPress={() => props.navigation.navigate("Top Tabs")}
      ></Button>
      <Button
        title="View Buttom Tabs"
        onPress={() => props.navigation.navigate("Bottom Tabs")}
      ></Button>
    </View>
  );
};
export default Detail;
