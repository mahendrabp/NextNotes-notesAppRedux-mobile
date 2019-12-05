import React, {Component} from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Screens/Home';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
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
