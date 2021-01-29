/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import {View, Item, Input, Label} from 'native-base';

import {observer} from 'mobx-react';

import {Dimensions} from 'react-native';

@observer
class CusInput extends Component {
  state = {};

  render() {
    return (
      <View
        style={[
          styles.borderSty,
          {
            borderWidth: 1,
            borderColor: '#333',
            position: 'relative',
            width: '100%',
            marginTop: 20,
          },
        ]}>
        <Label style={styles.floatLabel}>{this.props.title || 'Text'}</Label>
        <Item style={{borderWidth: 0, borderColor: 'transparent'}}>
          {this.props.secure == 'true' ? (
            <Input
              secureTextEntry={true}
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                fontSize: 13,
                color: '#333',
              }}
            />
          ) : (
            <Input
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                fontSize: 13,
                color: '#333',
              }}
            />
          )}
        </Item>
      </View>
    );
  }
}
export default CusInput;

const styles = StyleSheet.create({
  floatLabel: {
    position: 'absolute',
    top: -8,
    fontSize: 10,
    left: 20,
    color: '#001f90',
    backgroundColor: '#fff',
    zIndex: 999999,
    paddingLeft: 5,
    paddingRight: 5,
  },
  borderSty: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 1,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
});
