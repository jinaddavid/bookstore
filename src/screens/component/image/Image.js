/* eslint-disable react-native/no-inline-styles */

import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';

import {observer} from 'mobx-react';
// import { CustomAsset } from '../../../utils/assets';
// import { withNavigation } from 'react-navigation';

@observer
class GenImage extends Component {
  state = {};

  render() {
    return (
      <Image
        source={{uri: this.props.ImageUri}}
        style={this.props.imageStyle || styles.GenImageStyle}
      />
    );
  }
}
export default GenImage;

// export default withNavigation(RecruiterLanding);

const styles = StyleSheet.create({
  GenImageStyle: {
    width: 134,
    height: 134,
  },
});
