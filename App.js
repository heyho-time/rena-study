/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';

class App extends Component {
  state = {
    appName: 'Heyho App',
    random: [36, 999],
  };

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, randomNum],
      };
    });
  };

  onNumDelete = idx => {
    const newArray = this.state.random.filter((num, index) => {
      return idx != index;
    });
    this.setState({
      random: newArray,
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        {/* <Header name={this.state.appName} />
        <View>
          <Text
            style={styles.mainText}
            onPress={() => alert('text touch event')}>
            Hello world
          </Text>
        </View>

        <ScrollView style={{width: '100%'}}>
          <Generator add={this.onAddRandomNum} />
          <NumList num={this.state.random} delete={this.onNumDelete} />
        </ScrollView> */}

        <Input />
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

  mainText: {
    padding: 5,
    alignItems: 'center',
    width: '100%',
  },
});
