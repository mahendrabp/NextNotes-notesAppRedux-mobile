/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import {
  Card,
  ListItem,
  Divider,
  List,
  SearchBar,
  Button,
  Icon,
  Header,
} from 'react-native-elements';
import {throttle, debounce} from 'throttle-debounce';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  updateSearch = search => {
    this.setState({search: search});
    console.log(search);
    // this.getSearchData(search);
  };

  render() {
    const {search} = this.state;
    const {navigate} = this.props.navigation;
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          justifyContent: 'center',
          flex: 1,
          //   paddingTop: 15,
          paddingBottom: 5,
          flexDirection: 'column',
          fontFamily: 'openSans',
          backgroundColor: 'red',
        }}>
        <SearchBar
          placeholder="Cari..."
          inputContainerStyle={{
            backgroundColor: 'white',
            // maxHeight: 35,
            // marginTop: -3,
          }}
          containerStyle={{
            // marginBottom: 10,
            // marginStart: 23,
            // marginEnd: 23,
            backgroundColor: 'white',
            borderColor: 'white',
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent',
            shadowColor: '#000',
            shadowRadius: 15,
            shadowOffset: {width: 4, height: 13},
            shadowOpacity: 0.8,
            elevation: 6,
            borderRadius: 20,
            // height: 45,
          }}
          onChangeText={debounce(300, true, this.updateSearch)}
          value={search}
        />
      </View>
    );
  }
}

export default Home;
