/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
  ActivityIndicator,
  Image,
} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Picker from './src/picker';
import Modal from './src/modal';

class App extends Component {
  state = {
    myTextInput: '',
    alphabet: ['a', 'b', 'c'],
  };

  onChangeInput = e => {
    this.setState({
      myTextInput: e,
    });
  };

  onAddTextInput = () => {
    this.setState(prevState => {
      return {
        myTextInput: '',
        alphabet: [...prevState.alphabet, prevState.myTextInput],
      };
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        {/* <ActivityIndicator size="large" color="green" animating={true} />
        <Picker />
        <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          multiline={true}
        />
        <Button title="Add Text Input" onPress={this.onAddTextInput} />

        <ScrollView styles={{width: '100%'}}>
          {this.state.alphabet.map((item, idx) => (
            <Text key={idx} style={styles.mainText}>
              {item}
            </Text>
          ))}
        </ScrollView> */}

        {/* <Image
          style={styles.Logo}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2021/10/07/15/12/wine-6688901_1280.jpg',
          }}
        /> */}

        <Modal />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
    // justifyContent: 'center',
  },

  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },

  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
    margin: 20,
    backgroundColor: 'pink',
  },

  Logo: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
});
