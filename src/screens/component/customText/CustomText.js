/* eslint-disable react-native/no-inline-styles */

import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

import { observer } from 'mobx-react';
// import { withNavigation } from 'react-navigation';

@observer
class CustomText extends Component {

  state = {};


  render() {
    let textSize = this.props.textSize;
    let textWeight = this.props.textWeight;
    let textcolor = this.props.textcolor;
    return (

      <Text {...this.props} style={[this.props.textStyle, { color: textcolor, fontWeight: textWeight, fontSize: textSize, fontFamily: "caros" }]} >
        {this.props.displayText}
      </Text>

    );
  }
}
export default CustomText;


const styles = StyleSheet.create({

});
