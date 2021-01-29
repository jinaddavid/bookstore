import React, {Component, Fragment} from 'react';
import {Keyboard, StyleSheet, TouchableOpacity, View} from 'react-native';

import {Item, Input} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class GenButton extends Component {
  state = {
    textSecure: true,
  };
  toggleShowPassword = () => {
    this.setState({
      textSecure: !this.state.textSecure,
    });
  };

  render() {
    const {textSecure} = this.state;
    return (
      <View style={{width: '100%', marginTop: 20}}>
        <Item regular style={this.props.inputSty || styles.GeneralInputSty}>
          {this.props.secure === true ? (
            <Input
              style={this.props.innerInputSTy || styles.GeneralInnerInputSty}
              placeholder={this.props.placeholderText || ''}
              onChangeText={(e) => this.props.onChangeHandler(e)}
              onSubmitEditing={Keyboard.dismiss}
              secureTextEntry={textSecure}
              {...this.props}
            />
          ) : (
            <Input
              style={this.props.innerInputSTy || styles.GeneralInnerInputSty}
              placeholder={this.props.placeholderText || ''}
              onChangeText={(e) => this.props.onChangeHandler(e)}
              onSubmitEditing={Keyboard.dismiss}
              {...this.props}
            />
          )}

          {this.props.showTogglePass === true ? (
            <TouchableOpacity onPress={() => this.toggleShowPassword()}>
              <AntDesign name="eyeo" style={{fontSize: 18, marginRight: 10}} />
            </TouchableOpacity>
          ) : (
            <Fragment />
          )}
        </Item>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  GeneralInputSty: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingRight: 10,
    paddingLeft: 10,
    width: '100%',
    height: 40,
    color: '#333',
    borderWidth: 1,
    borderColor: '#eee',
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
