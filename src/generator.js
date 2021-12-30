/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Generator = props => (
  <View style={styles.generator}>
    <Button title="Add Number" onPress={() => props.add()} />
  </View>
);

export default Generator;

const styles = StyleSheet.create({
  generator: {
    padding: 5,
    alignItems: 'center',
    width: '100%',
  },
});
