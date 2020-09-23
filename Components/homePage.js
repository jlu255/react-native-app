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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
export const JustifyContentBasics = () => {
  return (
    // Try setting `justifyContent` to `center`.
    // Try setting `flexDirection` to `row`.
    <View style={styles.container}>
      <View style={{ width: 50, height: 50, backgroundColor: "powderblue" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "steelblue" }} />
    </View>
  );
};

// export default HomePage;
