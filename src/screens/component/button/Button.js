import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';
import {withNavigation} from 'react-navigation';

class GenButton extends Component {
  state = {
    selectedItems: [],
  };

  onSelectedItemsChange = (selectedItems) => {
    this.setState({selectedItems});
  };

  render() {
    const {selectedItems} = this.state;
    return (
      <Button
        style={this.props.btnStyle || styles.GeneralBtnSty}
        onPress={this.props.handelButtonPress}>
        <Text style={this.props.textStyle || styles.GeneralTextSty}>
          {this.props.btnText}
        </Text>
      </Button>
    );
  }
}
export default withNavigation(GenButton);

const styles = StyleSheet.create({
  GeneralBtnSty: {
    backgroundColor: '#000000',
    borderRadius: 15,
    paddingBottom: 15,
    paddingTop: 15,
    paddingRight: 30,
    paddingLeft: 30,
    elevation: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: "100%",
    marginTop: 20,
  },
  GeneralTextSty: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
});
