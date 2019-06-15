import React, { Component } from 'react';
import { Alert, View, ImageBackground,Text } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

//------ Import constant files
import '../../../constants/global.js';
import styles from '../../../constants/styles.js';
import colors from '../../../constants/colors.js';

export default class DancePage extends Component {

  static navigationOptions = {
    title: 'Sing all night!'
  };

  constructor(props) {
    super(props);
    this.state = {
      //------ Communication values
      sensor_On: true,
      sensor_Off: false
    };
  }

  //------ Post method called when button pressed, searching by item id.
  _interested() {
    url = 'http://' + ipAddress + ':' + port + global.pathSensor;
    const formData = new FormData();
    formData.append('sensor_State', this.state.sensor_On),
      console.log('url:' + url);
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(
        function(result) {
          console.log(result);
          if (!result.error) {
            this.setState({
              status: result.error,
              wholeResult: result
            });
            Alert.alert('We hope to see you soon!');
            global.estadoSensor = true;
          } else {
            Alert.alert('Please try again');
            console.log(result);
          }
        }.bind(this)
      )
      .catch(function(error) {
        console.log('ERROR: ' + error);
        alert('Result:' + error);
      });
  }

  _notInterested() {
    url = 'http://' + ipAddress + ':' + port + global.pathSensor;
    const formData = new FormData();
    formData.append('sensor_State', this.state.sensor_Off),
      console.log('url:' + url);
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(
        function(result) {
          console.log(result);
          if (!result.error) {
            this.setState({
              status: result.error,
              wholeResult: result
            });
            Alert.alert('OK');
            global.estadoSensor = false;
          } else {
            Alert.alert('Please try again');
            console.log(result);
          }
        }.bind(this)
      )
      .catch(function(error) {
        console.log('ERROR: ' + error);
        alert('Result:' + error);
      });
  }

  render() {
    return (
      <ImageBackground
        source={require('../../../assets/karaoke.jpg')}
        style={styles.container}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.containerLog} backgroundColor = {colors.opacityBlack}>
          <Text style={styles.description}>Come to the Bar Pura Vida and show your singing talents. There will be prizes and more! From 9:00pm to 2:00am.</Text>
          </View>
          <ActionButton buttonColor={colors.green} title='Like'>
            <ActionButton.Item
              buttonColor={colors.purple}
              title='I´m interested!'
              onPress={() => this._interested()}
            >
              <Icon name='md-notifications' style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor={colors.red}
              title='I´m not interested...'
              onPress={() => this._notInterested()}
            >
              <Icon name='md-notifications-off' style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
        </View>
      </ImageBackground>
    );
  }
}
