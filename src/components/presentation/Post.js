import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import config from "../../config";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      screenWidth: 0
    };
  }
  handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (this.lastTap && now - this.lastTap < DOUBLE_PRESS_DELAY) {
      this.likeToggled();
    } else {
      this.lastTap = now;
    }
  };
  componentDidMount() {
    this.setState({
      screenWidth: Dimensions.get("window").width
    });
  }
  likeToggled() {
    this.setState(prevState => ({
      liked: !prevState.liked
    }));
  }

  render() {
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);
    const imageUri =
      "https://lh3.googleusercontent.com/pZxhyCXznM-vb7bdKIj_7QhSxZGAlK2DGRzbIxfqDotBYkMU7OPzjGTeA3ymfDzdRyW8NjJEaFKmY0Xg-V1inMK7" +
      "=s" +
      imageHeight +
      "-c";
    const liked = this.state.liked
      ? config.images.likedIcon
      : config.images.heartIcon
    return (
      <View style={{flex:1}}>
        <View style={styles.userBar}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.userPics}
              source={{
                uri:
                  "https://lh3.googleusercontent.com/wikv4AFyzhLr1JQGDDkMrC4ShffQacs5LWBGCSMQR4VRe1XZgGKTin23mdbJSYBubklkO4srsMIGMJyvvnZqKDws8A"
              }}
            />
            <Text style={{ marginLeft: 7 }}>Ysus_96</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 28 }}>...</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            this.handleDoubleTap();
          }}
        >
          <Image
            style={{ width: this.state.screenWidth, height: 360 }}
            source={{
              uri: imageUri
            }}
          />
        </TouchableOpacity>
        <View style={styles.iconBar}>
          <Image
            style={[styles.icon, { height: 44, width: 44 }]}
            source={liked}
          />
          <Image
            style={[styles.icon, { height: 36, width: 38 }]}
            source={config.images.textIcon}
          />
          <Image
            style={[styles.icon, { height: 36, width: 38 }]}
            source={config.images.uploadIcon}
          />
        </View>
        <View style={styles.commentBar}>
          <Text>123.432 Me gusta</Text>
        </View>
      </View>
    );
  }
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
  userBar: {
    width: 100 + "%",
    height: config.stylesConst.rowHeight,
    backgroundColor: "rgb(255,255,255)",
    paddingHorizontal: 13,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  userPics: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  iconBar: {
    height: 52,
    width: 100 + "%",

    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    marginLeft: 6
  },
  commentBar: {
    height: 52,
    width: 100 + "%",
    paddingHorizontal: 13,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
export default Post;
