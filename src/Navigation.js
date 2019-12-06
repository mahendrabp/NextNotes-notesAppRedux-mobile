import React, {Component} from 'react';
import {View} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';
import Home from './Screens/Home';
import Note from './Screens/Note';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Note: {
      screen: Note,
    },
  },
  //   {
  //     headerMode: 'none',
  //     // initialRouteName: 'Maps',
  //     initialRouteName: 'InitNavigation',
  //     // initialRouteKey: 'Login',
  //   },
);

export default createAppContainer(MainNavigator);
