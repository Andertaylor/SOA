import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
  Linking
} from "react-native";

//------ Images imports
import facebook from "../../../assets/facebook.png";
import web from "../../../assets/web.png";

//------ Constant files imports
import styles from "../../../constants/styles.js";
import colors from "../../../constants/colors.js";

export default class media extends Component {
  static navigationOptions = {
    title: "Media"
  };

  _FacebookNavigate() {
    Linking.canOpenURL("https://www.facebook.com/physiscaribbean/").then(
      supported => {
        if (supported) {
          Linking.openURL("https://www.facebook.com/physiscaribbean/");
        } else {
          console.log("Please try again");
        }
      }
    );
  }

  _WebNavigate() {
    Linking.canOpenURL("http://physiscaribbean.net/").then(supported => {
      if (supported) {
        Linking.openURL("http://physiscaribbean.net//");
      } else {
        console.log("Please try again");
      }
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      //------ Items menu in an array.
      data: [
        { id: 1, title: "Facebook", color: colors.opacityBlack, image: facebook },
        { id: 2, title: "Web", color: colors.opacityBlack, image: web }
      ]
    };
  }

  //------ Functions when button pressed, searching by item id.
  clickEventListener(item) {
    if (item === 1) {
      this._FacebookNavigate();
    }
    if (item === 2) {
      this._WebNavigate();
    }
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/main.jpg")}
        style={styles.container}
      >
        <View style={styles.container}>
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={this.state.data}
            horizontal={false}
            numColumns={2}
            keyExtractor={item => {
              return item.id;
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={[styles.card, { backgroundColor: item.color }]}
                  //Function call when touching an item.
                  onPress={() => {
                    this.clickEventListener(item.id);
                  }}
                >
                  <View style={styles.cardHeader}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                  <Image style={styles.cardImage} source={item.image} />
                  <View style={styles.cardFooter}>
                    <Text style={styles.subTitle}>{item.members}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ImageBackground>
    );
  }
}
