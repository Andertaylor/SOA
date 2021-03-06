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
import Activities from "../../assets/activities.png";
import Services from "../../assets/services.png";
import Hostage from "../../assets/hostage.png";
import Users from "../../assets/login.png";
import Weather from "../../assets/weather.png";
import Info from "../../assets/info.png";
import Area from "../../assets/area.png";
import Booking from "../../assets/booking.png";
import Media from "../../assets/media.png";
import Roster from "../../assets/roster.png"
import Contact from "../../assets/contact.png";
import Language from "../../assets/language.png";
import Comments from "../../assets/comments.png";

//------ Constant files imports
import styles from "../../constants/styles.js";
import colors from "../../constants/colors.js";

export default class GridPage extends Component {
  static navigationOptions = {
    title: "Menu"
  };

  _Booking() {
    Linking.canOpenURL("https://www.booking.com/searchresults.es.html?aid=311839;label=physis-caribbean-bed-6GEg9GN4WB%2AwadYwSjKxDAS25504072817%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi%3Atiaud-146342138710%3Akwd-32758990683%3Alp9070295%3Ali%3Adec%3Adm;sid=bb4dae45f5bccce0f5adf3bca4e6706f;city=-1108716;expand_sb=1;highlighted_hotels=383809;hlrd=no_dates;keep_landing=1;redirected=1;source=hotel&gclid=CjwKCAjwxrzoBRBBEiwAbtX1n8iyfxnm4XmXbqhq8lRFtHkck9F4iHyg109Zv7rG_2cTWYDP1Q7cbBoChWkQAvD_BwE&").then(
      supported => {
        if (supported) {
          Linking.openURL("https://www.booking.com/searchresults.es.html?aid=311839;label=physis-caribbean-bed-6GEg9GN4WB%2AwadYwSjKxDAS25504072817%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi%3Atiaud-146342138710%3Akwd-32758990683%3Alp9070295%3Ali%3Adec%3Adm;sid=bb4dae45f5bccce0f5adf3bca4e6706f;city=-1108716;expand_sb=1;highlighted_hotels=383809;hlrd=no_dates;keep_landing=1;redirected=1;source=hotel&gclid=CjwKCAjwxrzoBRBBEiwAbtX1n8iyfxnm4XmXbqhq8lRFtHkck9F4iHyg109Zv7rG_2cTWYDP1Q7cbBoChWkQAvD_BwE&");
        } else {
          console.log("Please try again");
        }
      }
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      //------ Items menu in an array.
      data: [
        { id: 1, title: "Rate", color: colors.opacityBlack, image: Users },
        { id: 2, title: "Info", color: colors.opacityBlack, image: Info },
        { id: 3, title: "Weather", color: colors.opacityBlack, image: Weather },
        { id: 4, title: "Hostage", color: colors.opacityBlack, image: Hostage },
        { id: 5, title: "Services", color: colors.opacityBlack, image: Services },
        { id: 6, title: "Area", color: colors.opacityBlack, image: Area },
        { id: 7, title: "Booking", color: colors.opacityBlack, image: Booking },
        { id: 8, title: "Media", color: colors.opacityBlack, image: Media },
        { id: 9, title: "Language", color: colors.opacityBlack, image: Language },
        { id: 10, title: "Contact", color: colors.opacityBlack, image: Contact },
        { id: 11, title: "Roster", color: colors.opacityBlack, image: Roster },
        { id: 12, title: "Comments", color: colors.opacityBlack, image: Comments },
        { id: 13, title: "Activities", color: colors.opacityBlack, image: Activities },
      ]
    };
  }

  //------ Functions when button pressed, searching by item id.
  clickEventListener(item) {
    if (item === 1) {
      this.props.navigation.navigate("Login");
    }
    if (item === 2) {
      this.props.navigation.navigate("Info");
    }
    if (item === 3) {
      this.props.navigation.navigate("Weather");
    }
    if (item === 4) {
      this.props.navigation.navigate("");
    }
    if (item === 5) {
      this.props.navigation.navigate("");
    }
    if (item === 6) {
      this.props.navigation.navigate("");
    }
    if (item === 7) {
      this._Booking();
    }
    if (item === 8) {
      this.props.navigation.navigate("Media");
    }
    if (item === 9) {
      this.props.navigation.navigate("");
    }
    if (item === 10) {
      this.props.navigation.navigate("");
    }
    if (item === 11) {
      this.props.navigation.navigate("");
    }
    if (item === 12) {
      this.props.navigation.navigate("");
    }
    if (item === 13) {
      this.props.navigation.navigate("Activities");
    }
  }

  render() {
    return (
      <ImageBackground
        source={require("../../assets/main.jpg")}
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
                  onPress={() => {this.clickEventListener(item.id);}}
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
