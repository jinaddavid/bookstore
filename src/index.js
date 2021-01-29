import React, {Component} from 'react';
import {isSignedIn} from './auth';
import {createRootNavigator} from './router';

import {observer} from 'mobx-react';
import {createAppContainer} from 'react-navigation';

import {SafeAreaView, StyleSheet} from 'react-native';

@observer
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
    };
  }

  async componentDidMount() {
    isSignedIn()
      .then((res) => this.setState({signedIn: res, checkedSignIn: true}))
      .catch((err) => console.warn(err));
    // SplashScreen.hide();
  }

  render() {
    const {checkedSignIn, signedIn} = this.state;

    if (!checkedSignIn) {
      return null;
    }

    const Layout = createAppContainer(createRootNavigator(signedIn));
    return (
      <SafeAreaView style={styles.safeArea}>
        <Layout />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ddd',
  },
});
