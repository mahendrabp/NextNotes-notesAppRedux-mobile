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
import {getNotes, addNote, editNote} from '../redux/action/notes';
import {getCategory} from '../redux/action/category';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: this.props.navigation.state.params.header,
      title: this.props.navigation.state.params.title,
      note: this.props.navigation.state.params.note,
      categoryId: this.props.navigation.state.params.categoryId || 5,
      id: this.props.navigation.state.params.id,
    };
  }

  static navigationOptions = ({navigation}) => {
    // console.log(navigation.state.params);
    console.log(navigation.state.params.header);
    // const {
    //   state: {params = {}},
    // } = navigation;
    // console.log(navigation.getParam('saveNote'));
    return {
      title: navigation.state.params.header || '',
      headerTitleStyle: {
        textAlign: 'center',
        flexGrow: 1,
        alignSelf: 'center',
        fontSize: 14,
      },
      headerRight: (
        // <CheckButton/>
        <TouchableOpacity
          // onPress={
          // navigation.state.params.header == 'ADD NOTE'
          //     ? navigation.getParam('addNote')
          //     : navigation.getParam('editNote')
          // }>
          // onPress={() =>
          //   navigation.state.params.header == 'ADD NOTE'
          //     ? navigation.getParam('addNote')
          //     : navigation.state.params.header == 'EDIT NOTE'
          //     ? navigation.getParam('editNote')
          //     : alert('nothing')
          // }>
          onPress={() => {
            if (navigation.state.params.header == 'ADD NOTE') {
              navigation.state.params.addNote();
            } else {
              navigation.state.params.editNote();
            }
          }}>
          <Image
            source={require('../Assets/images/checked.png')}
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
    // this.props.navigation.setParams({addNote: this.addNote});
    // this.props.navigation.setParams({editNote: this.editNote});
    if (this.state.header == 'ADD NOTE') {
      this.props.navigation.setParams({
        addNote: this.addNote,
      });
    } else {
      this.props.navigation.setParams({
        editNote: this.editNote,
      });
      const {navigation} = this.props;
      const id = navigation.getParam('id');
      const note = navigation.getParam('note');
      this.setState({id, note});
    }
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
    const id_category = this.state.categoryId;
    if (this.state.text !== '' || id_category !== '') {
      //this.props.addNote({ title, note, categoryId })
      this.props.dispatch(addNote({title, note, id_category}));
      this.props.navigation.pop();
    } else {
      alert(category);
      this.props.navigation.pop();
    }
  };

  editNote = () => {
    const note = this.state.note;
    const id = this.state.id;
    const id_category = this.state.categoryId;
    const title = this.state.title;

    // if (this.state.text !== '') {
    //if (this.state.changed) {
    this.props.dispatch(editNote(id, {title, note, id_category}));
    this.props.navigation.pop();
    //}// else {
    //   this.props.navigation.pop();
    //}
  };
  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
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
