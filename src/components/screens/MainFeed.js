import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import {PostFeed} from '../container';

class InstaClone extends Component {
  
  render() {
    
    return (
      <View style={{felx:1,width:100 +'%',height:100+'%'}}
      >
        <View style={styles.tempNav}>
          <Text>Instagram</Text>
  
        </View>
        <PostFeed/>
      </View>
       
    )}
}
const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 56,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
});
export default InstaClone;
