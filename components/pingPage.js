import { StatusBar } from "expo-status-bar";

import React, { Component } from "react";
import {
  Platform,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
// import BackgroundTask from "react-native-background-task";

// BackgroundTask.define(() => {
//   console.log("Hello from a background task");
//   BackgroundTask.finish();
// });
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

export default class pingPage extends Component {
  state = {
    ipAddress: "",
    ms: "",
  };

  onPressButton = async () => {
    let ip = "https://" + this.state.ipAddress;
    let ms = " ";
    this.setState({ ms });
    var t0 = new Date();
    await fetch(ip)
      .then(() => {
        ms = new Date() - t0;
        this.setState({ ms });
        console.log(this.state.ms);
      })
      .catch((err) => {
        ms = "Network request failed";
        console.log(this.state.ms);
        this.setState({ ms });
      })
      .then((data) => {});
    // const ms = await Ping.start("8.8.8.8", { timeout: 1000 });
    // console.log(ms); //will be undefined js or worse
  };
  componentDidMount() {
    // BackgroundTask.schedule();
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            alignSelf: "stretch",
          }}
          onChangeText={(ipAddress) => this.setState({ ipAddress })}
          value={this.state.ipAddress}
        />
        <TouchableOpacity onPress={this.onPressButton}>
          <Text style={styles.buttonText}>Ping</Text>
        </TouchableOpacity>
        <Text style={styles.msText}>ms:{this.state.ms}</Text>
      </View>
    );
  }
}
