/** @format */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from 'react-native-storage';
// import 'es6-symbol/implement';
import App from './src/index';
// import App from './App';
import axios from 'axios';
// import firebase from 'firebase';

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

let storage = new Storage({
  // maximum capacity, default 1000
  size: 10000,

  storageBackend: AsyncStorage,

  defaultExpires: null,

  enableCache: true,

  sync: {
    // we'll talk about the details later.
  },
});

global.storage = storage;

axios.interceptors.request.use(
  (request) => {
    console.log(request);
    // Edit request config
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    // Edit request config
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => App);
