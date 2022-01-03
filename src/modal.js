/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';

class ModalComponent extends Component {
  state = {
    modal: false,
  };

  handleModal = () => {
    this.setState({
      modal: this.state.modal ? false : true,
    });
  };

  render() {
    return (
      <>
        <View width={{width: '100%'}}>
          <Button title="Open Modal" onPress={this.handleModal}></Button>
        </View>

        <Modal visible={this.state.modal} animationType={'fade'}>
          <View
            style={{
              marginTop: 60,
              backgroundColor: 'red',
            }}>
            <Text>This is modal content</Text>
          </View>
          <Button title="Go Back" onPress={this.handleModal}></Button>
        </Modal>
      </>
    );
  }
}

export default ModalComponent;

const styles = StyleSheet.create({});
