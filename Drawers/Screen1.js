import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TextInput,
  Button,
  Alert,
} from "react-native";

const Screen1 = () => {
  return (
    <ScrollView>
      <Text>Some Text</Text>
      <Button
        onPress={() => console.log("here log")}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <View>
        <Image
          source={require("../assets/icon.png")}
          style={{ width: 200, height: 200 }}
        ></Image>
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

export default Screen1;
