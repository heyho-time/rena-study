/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Header = props => (
  <TouchableOpacity style={styles.header} onPress={() => {}}>
    <View>
      <Text>{props.name}</Text>
    </View>
  </TouchableOpacity>
);

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    padding: 5,
    alignItems: 'center',
    width: '100%',
  },
});
