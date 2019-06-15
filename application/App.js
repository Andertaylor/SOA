
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from "react-navigation";

import LoginPage from './src/screens/login-page'
import RegisterPage from './src/screens/login-page/register.js'
import GridPage from './src/screens/home-page/grid.js'
import ClotheslinePage from './src/screens/home-page'
import DancePage from './src/screens/home-page/description/dance'
import KaraokePage from './src/screens/home-page/description/karaoke'
import JoggingPage from './src/screens/home-page/description/jogging'
import YogaPage from './src/screens/home-page/description/yoga'
import SoccerPage from './src/screens/home-page/description/soccer'
import SurfPage from './src/screens/home-page/description/surf'
import ActivitiesPage from './src/screens/home-page/activities'
import vision from './src/screens/vision'
import media from './src/screens/home-page/views/media'
import social from './src/screens/home-page/views/social'

const App = createStackNavigator({
  Menu: {screen: GridPage},
  Login: {screen: LoginPage},
  Register: {screen: RegisterPage},
  Clothesline: {screen: ClotheslinePage},
  Dance: {screen: DancePage},
  Jogging: {screen: JoggingPage},
  Karaoke: {screen: KaraokePage},
  Soccer: {screen: SoccerPage},
  Surf: {screen: SurfPage},
  Yoga: {screen: YogaPage},
  Activities: {screen: ActivitiesPage},
  Vision: {screen: vision},
  Media: {screen: media},
  Social: {screen: social}
  //--- Weather: {screen: Weather}
})

export default App 

