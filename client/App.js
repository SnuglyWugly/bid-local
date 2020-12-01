import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import Navigator from './routes/HomeStack';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
// import Item from './components/ItemComponent';
// import Home from './components/HomeComponent';

// const Stack = createStackNavigator();

const getFonts = () => {
  return Font.loadAsync({
    Roboto_medium: require('./assets/fonts/Roboto-Medium.ttf'),
  });
}

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  // const navRef = useRef(null);
  // const backRef = useRef(true);

  // function handleNavChange (navigation) {
  //   console.log(navigation.canGoBack());
  //   navRef.current = navigation;
  // }

  return (
    <>
    {fontsLoaded
      ?
      <Navigator/>
      :
      <AppLoading startAsync={getFonts} onFinish={()=>{setFontsLoaded(true)}}/>
    }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    height: 80,
    paddingTop: 25,
    backgroundColor: '#FFD166',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  arrowContainer: {
    height: 40,
    width: '15%',
  },
  arrow: {
    height: 40,
    width: 30,
  },
  logoContainer: {
    width: '70%',
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  navbarLogo: {
    height:50,
    width: 200,
  },
  burgerContainer: {
    width: '15%',
    height: 50
  },
});
