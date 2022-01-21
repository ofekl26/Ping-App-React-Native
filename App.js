import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   console.log("yaw");
//   return (
//     <View style={styles.container}>
//       <Text>Yo we pinging</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import React, { Component } from "react";
import {
  Platform,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import HomeScreen from "./components/homeScreen";
import PingPage from "./components/pingPage";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  buttonText: {
    fontSize: 24,
    padding: 32,
  },
  msText: {
    fontSize: 24,
    padding: 32,
  },
});
const Stack = createNativeStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Ping" component={PingPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
