/**
 * @flow
 */
'use strict';
import {
  Platform,
  StyleSheet,
   
} from 'react-native';
const APP_COLOR = '#03A9F4';
export const APP_STYLES =  {
  darkText: '#032250',
  lightText: '#7F91A7',
  cellBorder: '#EEEEEE',
  darkBackground: '#183E63',
  primaryColor:APP_COLOR,
  secondaryColor:'#5BC3BE',
  buttonBackground:APP_COLOR
};

export const IconStyles = StyleSheet.create({

  SmallIcon: {
   fontSize:15
  },
  MidiumIcon: {
   fontSize:25
  },
 
footer_icon_style: {
  fontSize:20,
  color:'#000',

  },
  
  });

  export const AppColor = StyleSheet.create({
 
    BlackColour: {
  // color:'#000',
  color:'#424242',
    }, 
    WhiteColour: {
  color:'#fff',
    }, 
    GreenColor: {
  color:'#62be6c',
    },
    BlueColor: {
  color:'#688ec8',
    },
    RedColor: {
  color:'#f05354',
    },
      
    });