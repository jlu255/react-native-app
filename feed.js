import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Feed = (props) => {
  return (
    <View>
      <Text>Feed page </Text>
      <Button
        title="Go to details"
        onPress={() =>
          props.navigation.navigate("Detail", {
            screenName: "My Detail Screen",
          })
        }
      ></Button>
    </View>
  );
};
export default Feed;
