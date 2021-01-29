// app/auth.js

import {AsyncStorage} from 'react-native';

export const onSignOut = () =>
  storage.remove({
    key: 'Loggedinstate',
  });

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    global.storage
      .load({
        key: 'Loggedinstate',
      })
      .then((ret) => {
        // found data goes to then()

        // resolve(false);
        if (ret.isAvailable === true) {
          console.log(ret.storeData, 'ret.isloggedin');
          //  console.log();
          if (ret.storeData.isloggedin === true) {
            resolve(true);
          } else {
            resolve(false);
          }
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
            // TODO;
            //  resolve(true);
            // resolve(false);
            resolve(false);
            break;
          case 'ExpiredError':
            // TODO
            // resolve(true);
            resolve(false);

            break;
        }
      });

    // AsyncStorage.getItem(USER_KEY)
    //   .then(res => {
    //     if (res !== null) {
    //       resolve(true);
    //     } else {
    //       resolve(false);
    //     }
    //   })
    //   .catch(err => reject(err));
  });
};
