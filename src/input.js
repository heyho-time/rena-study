/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const Input = props => {
  const [myTextInput, setMyTextInput] = useState('');

  const onChangeInput = e => {
    setMyTextInput(e);
  };

  return (
    <View style={styles.mainView}>
      <TextInput
        value={myTextInput}
        style={styles.input}
        onChangeText={onChangeInput}
        multiline={true}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
});
