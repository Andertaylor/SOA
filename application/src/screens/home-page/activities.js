import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList
} from "react-native";

//------ Images imports
import Surf from "../../assets/surf.png";
import Dance from "../../assets/dance.png";
import Soccer from "../../assets/soccer.png";
import Yoga from "../../assets/yoga.png";
import Karaoke from "../../assets/karaoke.png";
import Activities from "../../assets/activities.png";

//------ Constant files imports
import styles from "../../constants/styles.js";
import colors from "../../constants/colors.js";

export default class ActivitiesPage extends Component {
  static navigationOptions = {
    title: "Menu"
  };

  constructor(props) {
    super(props);
    this.state = {
      //------ Items menu in an array.
      data: [
        { id: 1, title: "Dance", color: colors.opacityBlack, image: Dance },
        { id: 2, title: "Jogging", color: colors.opacityBlack, image: Activities },
        { id: 3, title: "Karaoke", color: colors.opacityBlack, image: Karaoke },
        { id: 4, title: "Soccer", color: colors.opacityBlack, image: Soccer },
        { id: 5, title: "Surf", color: colors.opacityBlack, image: Surf},
        { id: 6, title: "Yoga", color: colors.opacityBlack, image: Yoga}
      ]
    };
  }

  //------ Functions when button pressed, searching by item id.
  clickEventListener(item) {
    if (item === 1) {
      this.props.navigation.navigate("Dance");
    }
    if (item === 2) {
      this.props.navigation.navigate("Vision");
    }
    if (item === 3) {
        this.props.navigation.navigate("Karaoke");
    }
    if (item === 4) {
    this.props.navigation.navigate("Soccer");
    }
    if (item === 5) {
    this.props.navigation.navigate("Surf");
    }
    if (item === 6) {
    this.props.navigation.navigate("Yoga");
    }
  }

  render() {
    return (
      <ImageBackground
        source={require("../../assets/activities.jpg")}
        style={styles.container}
      >
        <View style={styles.container}>
          <FlatList
            style={styles.list}
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
                  onPress={() => {this.clickEventListener(item.id);}}
                >
                  <View style={styles.cardHeader}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                  <Image style={styles.cardImage} source={item.image}/>
                  <View style={styles.cardFooter}>
                    <Text style={styles.title}>{}</Text>
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
