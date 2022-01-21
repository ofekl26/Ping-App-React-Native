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

export default class okPage extends Component {
  //   state = {
  //     ipAddress: "",
  //     ms: "",
  //   };
  //   onPressButton = async () => {
  //     let ip = "https://" + this.state.ipAddress;
  //     let ms = " ";
  //     this.setState({ ms });
  //     var t0 = new Date();
  //     await fetch(ip)
  //       .then(() => {
  //         ms = new Date() - t0;
  //         this.setState({ ms });
  //         console.log(this.state.ms);
  //       })
  //       .catch((err) => {
  //         ms = "Network request failed";
  //         console.log(this.state.ms);
  //         this.setState({ ms });
  //       })
  //       .then((data) => {});
  //     // const ms = await Ping.start("8.8.8.8", { timeout: 1000 });
  //     // console.log(ms); //will be undefined js or worse
  //   };
  info = "";
  onPressButton = async () => {
    // const okhttp = require("okhttp");

    // var MimeBuilder = okhttp.MimeBuilder;
    // var Request = okhttp.Request;
    // var RequestBody = okhttp.RequestBody;
    // var RequestBuilder = okhttp.RequestBuilder;
    // var FormEncodingBuilder = okhttp.FormEncodingBuilder;
    // var MultiPartBuilder = okhttp.MultiPartBuilder;

    /**
     * @param msg a {data, response, request} Object
     */
    // function onComplete(msg) {
    //   //   this.state.info = "Fulfiled";
    //   //   let status = "Fulfiled";
    //   //   console.log(this.state.info);
    //   //   this.setState({ status });

    //   console.log(
    //     "Success " +
    //       "data " +
    //       msg.data +
    //       ", response " +
    //       msg.response.statusCode +
    //       ", request " +
    //       msg.request.method
    //   );
    // }

    function onError(err) {
      console.error(err);
      //   console.log(this.info);
    }
    let i = new RequestBuilder()
      .url("http://httpbin.org/post")
      .POST(
        RequestBody.create(
          { a: "a1", b: "b1" },
          new MimeBuilder()
            .contentType("application/json", "charset", "utf8")
            .build()
        )
      )
      .buildAndExecute()
      .then(() => {
        this.info = "Promise Fulfiled";
        let status = "Promise Fulfiled";
        console.log(this.info);
        this.setState({ status });
      })
      .catch(() => {
        this.info = "Promise Failed";
        let status = "Promise Failed";
        console.log(this.info);
        this.setState({ status });
        // onError();
      });
    console.log(i);
  };
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.onPressButton}>
          <Text style={styles.buttonText}>okhttp to 'http://httpbin.org/'</Text>
        </TouchableOpacity>
        <Text style={styles.msText}>info:{this.info}</Text>
      </View>
    );
  }
}
