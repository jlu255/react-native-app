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

const Screen3 = () => {
  return (
    <ScrollView>
      <Text>Screen3 Text</Text>

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

export default Screen3;
