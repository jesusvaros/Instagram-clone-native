import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class Login extends Component {

    login(){
        alert('presed')
    }

  render() {
    return (
      <TouchableOpacity
        onPress={()=>this.login()}
        style={{
          height: 100 + "%",
          width: 100 + "%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>LOGIN PAGE</Text>
      </TouchableOpacity>
    );
  }
}
export default Login;
