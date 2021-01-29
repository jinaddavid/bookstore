// app/router.js

import React from 'react';
import {Image} from 'react-native';

import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

// Screeens
import Login from './screens/login/login';
import Books from './screens/books/Books';
import ViewBook from './screens/books/ViewBooks';

// inside screens

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0,
  },
});
const TransitionConfig = () => ({
  transitionSpec: {
    duration: 800,
    timing: Animated.timing,
    easing: Easing.out(Easing.poly(4)),
  },
  screenInterpolator: (sceneProps) => {
    const {layout, position, scene} = sceneProps;
    const {index} = scene;
    const width = layout.initWidth;
    const translateX = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [width, 0, 0],
    });
    if (index <= 1) {
      return {};
    }

    return {transform: [{translateX}]};
  },
});

export const SignedOut = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
      },
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

const SignedIn = createStackNavigator(
  {
    Books: {
      screen: Books,
      navigationOptions: {
        title: 'Books',
      },
    },
    ViewBook: {
      screen: ViewBook,
      navigationOptions: {
        title: 'View Book',
      },
    },
  },

  {
    headerMode: 'none',
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: 'green'},
      // title: 'Mains',
      headerTintColor: 'white',
      gesturesEnabled: true,

      // headerLeft:   <DrawerOpen />,
    }),
  },
);

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn,
      },
      SignedOut: {
        screen: SignedOut,
      },
    },

    {
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',

      navigationOptions: {
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        transitionConfig: noTransitionConfig,
      },
    },
  );
};
