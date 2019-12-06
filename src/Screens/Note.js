import React, {Component} from 'react';
import {
  Picker,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {getNotes, addNote} from '../redux/action/notes';
import {getCategory} from '../redux/action/category';

class Note extends Component {
  constructor() {
    super();
    this.state = {
      // header: this.props.navigation.state.params.header,
      // title: this.props.navigation.state.params.title,
      // note: this.props.navigation.state.params.note,
      // categoryId: this.props.navigation.state.params.categoryId || 1,
      // id: this.props.navigation.state.params.id,
    };
  }

  static navigationOptions = ({navigation}) => {
    const {
      state: {params = {}},
    } = navigation;
    console.log(navigation.getParam('saveNote'));
    return {
      title: params.header || '',
      headerTitleStyle: {
        textAlign: 'center',
        flexGrow: 1,
        alignSelf: 'center',
        fontSize: 14,
      },
      headerRight: (
        // <CheckButton/>
        <TouchableOpacity
          onPress={() =>
            params.header == 'ADD NOTE'
              ? params.addNote()
              : params.header == 'EDIT NOTE'
              ? navigation.getParam('saveNote')()
              : alert('nothing')
          }>
          <Image
            // source={require('../Assets/images/checked.png')}
            style={{height: 25, width: 25, marginRight: 17}}
          />
        </TouchableOpacity>
      ),
    };
  };

  handleGoBack = () => {
    const {navigation} = this.props; //es6
    navigation.goBack();
  };

  componentDidMount() {
    this.getData();
    this.getDataCategory();
  }

  getData = (search, sort) => {
    this.setState({
      page: 1,
    });
    search = search == undefined ? '' : search;
    this.props.dispatch(getNotes(search, 1, sort));
  };

  getDataCategory = () => {
    this.props.dispatch(getCategory());
  };

  addNote = () => {
    const title = this.state.title;
    const note = this.state.note;
    const category = this.state.categoryId;

    if (this.state.text !== '' || category !== '') {
      //this.props.addNote({ title, note, categoryId })
      this.props.dispatch(addNote({title, note, category}));
      this.props.navigation.pop();
    } else {
      alert(category);
      this.props.navigation.pop();
    }
  };
  render() {
    return (
      <ScrollView>
        <View style={{paddingTop: 15}}>
          <TextInput
            style={{
              borderColor: '#CCCCCC',
              height: 141,
              fontSize: 18,
              fontWeight: 'bold',
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: 40,
            }}
            placeholder="Add Title"
            value={this.state.title}
            multiline={true}
            onChangeText={title => this.setState({title})}
          />

          <TextInput
            style={{
              borderColor: '#CCCCCC',
              height: 141,
              fontSize: 16,
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: 50,
            }}
            placeholder="Add Description"
            value={this.state.note}
            multiline={true}
            onChangeText={note => this.setState({note})}
          />
        </View>
        <View style={{marginLeft: 20, marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            CATEGORY
          </Text>
          <Picker
            selectedValue={this.state.categoryId}
            onValueChange={categoryId => this.setState({categoryId})}
            style={{height: 50, width: 150}}
            // onValueChange={(itemValue, itemIndex) =>
            //   this.setState({language: itemValue})
            // }
          >
            {this.props.category.category.map((item, index) => {
              return (
                <Picker.Item label={item.name} value={item.id} key={item.id} />
                //this.navLink('Note', item.name, item.image, item.id)
              );
            })}
          </Picker>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    category: state.category,
  };
};

export default connect(mapStateToProps)(Note);
