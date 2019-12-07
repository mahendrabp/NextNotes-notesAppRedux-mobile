import React, {Component} from 'react';
import {View} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';
import Home from './Screens/Home';
import Note from './Screens/Note';
import Drawer from './Components/Drawer';

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

// const RootStack = createStackNavigator(
//   {
//     Home: {
//       screen: Home,
//     },
//     Note: {
//       screen: Note,
//     },
//   },
//   {
//     // mode: 'modal',
//   },
// );
// const MainNavigator = createDrawerNavigator(
//   {
//     Home: {
//       screen: RootStack,
//     },
//     Note: {
//       screen: Note,
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     mode: 'card',
//     drawerWidth: 235,
//     contentComponent: ({navigation}) => {
//       return <Drawer />;
//     },
//     navigationOptions: {header: null},
//   },
// );

export default createAppContainer(MainNavigator);
