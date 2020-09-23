import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import Screen1 from "./Drawers/Screen1";
import Screen2 from "./Drawers/Screen2";
import Screen3 from "./Drawers/Screen3";
import Tab1 from "./Tabs/Tab1";
import Tab2 from "./Tabs/Tab2";
import Tab3 from "./Tabs/Tab3";
import Feed from "./feed";
import Detail from "./detail";
import { StyleSheet, Text, View } from "react-native";
import { JustifyContentBasics } from "./Components/homePage";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

export default class App extends Component {
  render() {
    const createHomeStack = () => (
      <Stack.Navigator>
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{
            title: "my Feed",
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: "Detail screen",
            headerStyle: {
              backgroundColor: "blue",
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen name="Bottom Tabs" children={createBottomTabs} />
        <Stack.Screen name="Top Tabs" children={createTopTabs} />
      </Stack.Navigator>
    );
    const createTopTabs = () => (
      <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen
          name="Tab 1"
          component={Tab1}
          options={{
            title: "Hello",
          }}
        />
        <MaterialTopTabs.Screen
          name="Tab 2"
          component={Tab2}
          options={{ title: "Hello2" }}
        />
        <MaterialTopTabs.Screen
          name="Tab 3"
          component={Tab3}
          options={{ title: "Hello3" }}
        />
      </MaterialTopTabs.Navigator>
    );
    const createBottomTabs = () => (
      <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen
          name="Tab 1"
          component={Tab1}
          options={{ title: "Hello" }}
        />
        <MaterialBottomTabs.Screen
          name="Tab 2"
          component={Tab2}
          options={{ title: "Hello2" }}
        />
        <MaterialBottomTabs.Screen
          name="Tab 3"
          component={Tab3}
          options={{ title: "Hello3" }}
        />
      </MaterialBottomTabs.Navigator>
    );
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={createHomeStack} />
          <Drawer.Screen name="Contacts" component={Screen1} />
          <Drawer.Screen name="Favorite" component={Screen2} />
          <Drawer.Screen name="Setting" component={Screen3} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
