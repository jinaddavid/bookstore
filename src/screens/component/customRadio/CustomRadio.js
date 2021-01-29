import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Item, Input, Label} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {observer} from 'mobx-react';

import accountStore from '../../../stores/Account';

const blackColor = accountStore.BlackColor;
const primaryColor = accountStore.EdenColor;
const whiteColor = accountStore.WhiteColor;
const bgColor = accountStore.BgColor;

@observer
export default class CustomRadio extends Component {
  state = {
    checkState: '',
  };
  changeCheckState = (Param) => {
    this.setState({
      checkState: Param,
    });
  };

  render() {
    // const {checkState} = this.state;
    const name1 = this.props.Radioname1;
    const name2 = this.props.Radioname2;
    const checkState = this.props.currentSelected;

    return (
      <View style={{width: '100%'}}>
        <Label style={this.props.inputTextSty || styles.LabelTextSty}>
          {this.props.LabelText || ''}
        </Label>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={
              checkState === name1 ? styles.radioBtnActive : styles.radioBtn
            }
            onPress={() => this.props.Changer(name1)}>
            <Text
              style={
                checkState === name1
                  ? styles.GeneralTextStyActive
                  : styles.GeneralTextSty
              }>
              {name1}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              checkState === name2 ? styles.radioBtnActive : styles.radioBtn
            }
            onPress={() => this.props.Changer(name2)}>
            <Text
              style={
                checkState === name2
                  ? styles.GeneralTextStyActive
                  : styles.GeneralTextSty
              }>
              {name2}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  GeneralInputSty: {
    backgroundColor: bgColor,
    borderRadius: 5,
    paddingRight: 10,
    paddingLeft: 10,
    width: '100%',
    height: 40,
    color: '#333',
    borderWidth: 1,
    borderColor: '#333',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioBtnActive: {
    backgroundColor: primaryColor,
    borderRadius: 50,
    paddingRight: 25,
    paddingLeft: 25,
    height: 30,
    borderWidth: 1,
    borderColor: primaryColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  GeneralTextStyActive: {
    color: whiteColor,
    fontSize: 13,
  },
  radioBtn: {
    backgroundColor: 'transparent',
    borderRadius: 50,
    paddingRight: 25,
    paddingLeft: 25,
    height: 30,
    borderWidth: 1,
    borderColor: primaryColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  GeneralTextSty: {
    color: primaryColor,
    fontSize: 13,
  },
  LabelTextSty: {
    color: blackColor,
    fontSize: 13,
    marginBottom: 4,
  },
  GeneralInnerInputSty: {
    fontSize: 13,
  },
});
