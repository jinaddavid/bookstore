import { Dimensions } from 'react-native';
const window = Dimensions.get('window');
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
 import React, { Component } from 'react';
import {
  Platform,SafeAreaView,
  StyleSheet,
  View, ScrollView,
  StatusBar, Image, StyleProvider, TouchableOpacity, Keyboard, KeyboardAvoidingView, Animated, ImageBackground
} from 'react-native';
 
import SkeletonPlaceholder from "react-native-skeleton-placeholder"; 
 
//import styles from '../StyleSheet/DrawerStyle';
 
export default class SkeletonHoc extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentdate: "",
      
    }
 
  }
 

  componentDidMount() {

    // this.gettaskcount();
    // this.getmysettings();

  }
 
  
  render() {
 
    return (
      <View style={styles.Spinnercontainer}> 
      <SafeAreaView>
       
      <SkeletonPlaceholder 
      backgroundColor="#A9A9A9"
      >
   {/* <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              borderWidth: 5,
              borderColor: "white",
              alignSelf: "center",
              position: "relative",
              top: -50
            }}
          />
          <View style={{ width: 120, height: 20, alignSelf: "center" }} />
          <View
            style={{
              width: 240,
              height: 20,
              alignSelf: "center",
              marginTop: 12
            }}
          />
          <View style={{ width: 120, height: 20, alignSelf: "center" }} />
          <View
            style={{
              width: 240,
              height: 20,
              alignSelf: "center",
              marginTop: 12
            }}
          /> */}
       {this.props.children}
   </SkeletonPlaceholder>
  
 
   </SafeAreaView>
   </View>
    );
  }
}

const styles = StyleSheet.create({



  lottie: {
    width: 100,
    height: 100
  },

  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
 },
  activityIndicatorcontainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 70,
  backgroundColor:'#000000',
},
Spinnercontainer: {
  top:30,
  flex: 1,
  height:deviceHeight-50,
  // justifyContent: 'center',
  // textAlign: 'center',
  // paddingTop: 30,
  // marginBottom: 30,
  // backgroundColor: '#ecf0f1',
  // padding: 8,
  // top: 0, bottom: 0, left: 0, right: 0
  backgroundColor:'#000',
 // bottom:1,

},
displayTitle: {
  // flex:1,
  paddingTop: 2,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  // backgroundColor: 'rgba(0,0,0,0.4)',
  // paddingLeft:10,
},

}); 


  // https://pusher.com/tutorials/geolocation-sharing-react-native/