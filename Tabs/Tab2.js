import React from "react";
import { View, Text } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import { styles } from "../Styles/styles";

const Tab2 = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Tab 2</Text>
    </View>
  );
};

export default Tab2;
