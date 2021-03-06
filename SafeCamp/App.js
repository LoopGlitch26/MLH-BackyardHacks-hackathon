/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  ImageBackground
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
export const BACKGROUND = require('./background.png'); 
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home  from './Home';
import Spring from './Spring';
import Winter from './Winter';
import Fall from './Fall';
import  Camera  from './Camera';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render(){

  // Variables
  // const month = new Date().getMonth() + 1;
  const month = 3;
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {(month > 4  && month < 9)&&         
        <Stack.Screen
          name="Safe Camp"
          component={Home}
          // options={{ title: 'Welcome' }}
        />}
        {(month > 2 && month < 5)&&
        <Stack.Screen
        name="Safe Camp"
        component={Spring}
        // options={{ title: 'Welcome' }}
      />}
      {(month == 12 || month < 3)&&
        <Stack.Screen
        name="Safe Camp"
        component={Winter}
        // options={{ title: 'Welcome' }}
      />}
      {(month > 8 && month < 12)&&
        <Stack.Screen
        name="Safe Camp"
        component={Fall}
        // options={{ title: 'Welcome' }}
      />}
        <Stack.Screen name="Capture!" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  mainConatinerStyle: {
    flexDirection: 'column',
    flex: 1,
    paddingTop: 100,
    paddingLeft: '25%',
    paddingRight: '25%'
  },
snakesButton: {
  paddingLeft: '25%',
  paddingRight: '25%',
  paddingBottom: 20
},
  poisonIvy: {
    position: 'absolute',
    bottom:0,
  },
  right: {
    alignSelf: 'flex-end',
    marginTop: -165,
  },
  uvIndex: {
    fontFamily: 'Century Gothic 400',
    fontSize: 35,
    color: Colors.white,
    paddingLeft: 40
  },
  uv: {
    fontFamily: 'Century Gothic 400',
    fontSize: 25,
    color: Colors.white,
    paddingRight: 30
  },
  day: {
    color: Colors.white,
    fontSize: 25,
    paddingTop: 220,
    fontFamily: 'Century Gothic 400',
    paddingLeft: 50,
  },
  weather: {
    color: Colors.white,
    fontFamily: 'Century Gothic 400',
    fontSize: 25,
    paddingLeft: 55,
  },
  temperature: {
    color: Colors.white,
    fontSize: 110,
    // textAlign: 'center', // <-- the magic
    fontFamily: 'Century Gothic 400',
    paddingLeft: 35,
    marginTop: -20,
    marginBottom: -20,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // or 'stretch'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
