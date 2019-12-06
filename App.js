import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MainNavigator from './src/Navigation';
import {Root} from 'native-base';
import {Provider} from 'react-redux';
import store from './src/redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;
