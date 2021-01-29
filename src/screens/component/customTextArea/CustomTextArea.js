import React, {Component} from 'react';
import {StyleSheet, View, Keyboard} from 'react-native';

import {Item, Input, Label, Textarea} from 'native-base';

export default class CustomTextArea extends Component {
  state = {};

  render() {
    const {selectedItems} = this.state;
    return (
      <View style={{width: '100%'}}>
        <Label style={this.props.inputTextSty || styles.GeneralTextSty}>
          {this.props.inputText || ''}
        </Label>
        <Textarea
          rowSpan={5}
          style={(this, this.props.inputSty || styles.GeneralInputSty)}
          placeholder={this.props.placeholder || ''}
          onChangeText={(e) => this.props.onChangeHandler(e)}
          onSubmitEditing={Keyboard.dismiss}
          {...this.props}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  GeneralInputSty: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingRight: 10,
    paddingLeft: 10,
    width: '100%',
    // height: 50,
    color: '#333',
    borderWidth: 0.5,
    borderColor: '#333',
  },
  GeneralInnerInputSty: {
    fontSize: 13,
  },
  GeneralTextSty: {
    color: '#333',
    fontSize: 13,
    marginBottom: 4,
  },
});
