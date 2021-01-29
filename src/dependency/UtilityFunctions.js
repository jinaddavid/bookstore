/* eslint-disable react-native/no-inline-styles */
import Spinner from 'react-native-loading-spinner-overlay';
import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import Communications from 'react-native-communications';
import Snackbar from 'react-native-snackbar';

import {View} from 'native-base';
import AnimatedLoader from 'react-native-animated-loader';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const ReturnPartOfText = (text, length) => {
  let size = length;
  if (text.length < length) {
    size = text.length;
  }
  let capitalize = text.slice(0, 1).toUpperCase() + text.slice(1, size);
  return capitalize;
};
export const myspiner = (state) => {
  let spin = (
    <View style={styles.Spinnercontainer}>
      <AnimatedLoader
        visible={state}
        // overlayColor="rgba(255,255,255,0.75)"
        overlayColor="rgba(0.00,0.00,0.00,0.1)"
        //overlayColor="000000"
        // source={require("./loader.json")}
        // source={{ uri:'https://assets7.lottiefiles.com/datafiles/QeC7XD39x4C1CIj/data.json'}}
        animationStyle={styles.lottie}
        speed={1}
      />
    </View>
  );
  return spin;
};
export const SkeletonLoader = () => {
  let spin = (
    <SkeletonPlaceholder>
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: 0,
          padding: 19,
          height: 140,
        }}>
        <View style={styles.displayTitle} />
        <View style={styles.displayTitle} />
        <View style={styles.displayTitle} />
      </View>
    </SkeletonPlaceholder>
  );

  return spin;
};

export const MapLoader = (state, text = null) => {
  let spin = (
    <View style={styles.Spinnercontainer}>
      <Spinner
        visible={state}
        textContent={text ? text : 'Please Wait...'}
        textStyle={{color: '#fff'}}
        animation={'fade'}
        color={'#bd393b'}
        overlayColor={'#000'}
        cancelable={true}
      />
    </View>
  );
  return spin;
};

export const ShowNotification = (Text, delay = false) => {
  if (delay) {
    setTimeout(() => {
      Snackbar.show({
        text: Text,
        duration: Snackbar.LENGTH_LONG,
      });
    }, 1000);
  } else {
    Snackbar.show({
      text: Text,
      duration: Snackbar.LENGTH_LONG,
    });
  }
};

export const activityspiner = (state) => {
  let spin = (
    <View style={styles.activityIndicatorcontainer}>
      <ActivityIndicator
        animating={state}
        color="#bc2b78"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );

  return spin;
};

export const PersistData = (Mykey, data) => {
  global.storage.save({
    key: Mykey, // Note: Do not use underscore("_") in key!
    data: {
      isAvailable: true,
      storeData: data,
    },

    // if not specified, the defaultExpires will be applied instead.
    // if set to null, then it will never expire.
    expires: null,
  });
};

export const GetPersistData = (key) =>
  new Promise((resolve) => {
    global.storage
      .load({
        key: key,
      })
      .then((ret) => {
        // resolve(ret);
        if (ret.isAvailable === true) {
          let myData = ret.storeData;
          resolve(myData);
        } else {
          resolve(false);
        }
      })
      .catch((err) => {
        // any exception including data not found
        // goes to catch()
        console.warn(err.message);
        switch (err.name) {
          case 'NotFoundError':
            // alert("You have not register before")
            resolve(false);
            break;
          case 'ExpiredError':
            // TODO
            resolve(false);
            break;
        }
      });
  });

export const loggedinUserdetails = () =>
  new Promise((resolve) => {
    global.storage
      .load({
        key: 'Loggedinstate',
      })
      .then((ret) => {
        resolve(ret);
      })
      .catch((err) => {
        // any exception including data not found
        // goes to catch()
        console.warn(err.message);
        switch (err.name) {
          case 'NotFoundError':
            // alert("You have not register before")
            resolve({});
            break;
          case 'ExpiredError':
            // TODO
            resolve({});
            break;
        }
      });
  });
export const getusertype = () =>
  new Promise((resolve) => {
    global.storage
      .load({
        key: 'Loggedinstate',
      })
      .then((ret) => {
        resolve(ret);
      })
      .catch((err) => {
        // any exception including data not found
        // goes to catch()
        console.warn(err.message);
        switch (err.name) {
          case 'NotFoundError':
            // alert("You have not register before")
            resolve({});
            break;
          case 'ExpiredError':
            // TODO
            resolve({});
            break;
        }
      });
  });

export const getLodgedInDetailsProfile = () =>
  new Promise((resolve) => {
    global.storage
      .load({
        key: 'loggedinUserdetails',
      })
      .then((ret) => {
        resolve(ret);
      })
      .catch((err) => {
        // any exception including data not found
        // goes to catch()
        console.warn(err.message);
        switch (err.name) {
          case 'NotFoundError':
            //      alert("You have not register before")
            resolve({});
            break;
          case 'ExpiredError':
            //    alert("You have not register dd")
            resolve({});
            break;
        }
      });
  });

export const Communicator = (action, param) => {
  if (param === '') {
    Toast.show('Not available', Toast.SHORT, Toast.BOTTOM, styletoest);
  } else if (action === '') {
    Toast.show('empty Action', Toast.SHORT, Toast.BOTTOM, styletoest);
  } else {
    if (action === 'phone') {
      Communications.phonecall(param, true);
    } else if (action === 'web') {
      Communications.web(param);
    } else if (action === 'message') {
    }
  }
};
export const AppInlineLoader = (Status) => {
  try {
    // Check If Loading
    if (Status) {
      return <ActivityIndicator />;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },

  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  activityIndicatorcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
    backgroundColor: 'transparent',
  },
  Spinnercontainer: {
    // flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    marginBottom: 30,
    backgroundColor: '#ecf0f1',
    padding: 8,
    // top: 0, bottom: 0, left: 0, right: 0
    bottom: 50,
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
