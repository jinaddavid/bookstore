import React, {Component} from 'react';
import {StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import {View} from 'native-base';
import CusInput from '../component/customInputs/CustomInputs';
import Button from '../component/button/Button';
import {observer} from 'mobx-react';
// import { CustomAsset } from '../../../utils/assets';
import {ScrollView} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';
import CustomText from '../component/customText/CustomText';
import BgVector from '../../assets/images/bgVector.png';
import Subtract from '../../assets/images/Subtract.png';
import FingerPrint from '../../assets/images/fingerPrint.png';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import {
  GetPersistData,
  PersistData,
  ShowNotification,
} from '../../dependency/UtilityFunctions';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
const busy = 'Proccessing...';

// @observer
class Login extends Component {
  state = {
    canUseBiometric: false,
    email: 'test@gmail.com',
    password: 'password',
    isprocessing: false,
  };

  gotoPage = (route) => {
    this.props.navigation.navigate(route);
  };
  startFingerPrintAuth = () => {
    FingerprintScanner.authenticate({
      title: 'Welcome',
      description: 'Log in to your account with your finger print',
    })
      .then(async () => {
        // this.props.handlePopupDismissed();
        // AlertIOS.alert('Authenticated successfully');

        let userSessionDetails = await GetPersistData('loggedinUserdetails');
        console.log(userSessionDetails);
        if (userSessionDetails === false) {
          ShowNotification('please login first before using biometric');
        } else {
          let token_data = {
            accessToken: 'token',
            isloggedin: true,
          };
          ShowNotification('Authenticated successfully');

          let data2save = Object.assign({}, userSessionDetails, token_data);

          PersistData('Loggedinstate', data2save);
          this.gotoPage('SignedIn');
        }
      })
      .catch((error) => {
        // this.props.handlePopupDismissed();
        // AlertIOS.alert(error.message);
        console.log(error, 'Authenticated');
      });
  };
  componentDidMount() {
    FingerprintScanner.isSensorAvailable()
      .then((biometryType) => {
        // this.setState({biometryType});
        console.log(biometryType);
        this.setState({
          canUseBiometric: true,
        });
      })
      .catch((error) => {
        this.setState({
          canUseBiometric: false,
        });
        console.log('isSensorAvailable error => ', error);
      });
  }
  handleInputChange = (key, value) => {
    console.log(value);
    this.setState({[key]: value});
  };
  PasistLoginRecord = (data, data2save) => {
    PersistData('loggedinUserdetails', data);
    PersistData('Loggedinstate', data2save);
  };
  _LoginHandler = () => {
    const {email, password} = this.state;
    let requiredFields = {
      'Email Address': email,
      'Password ': password,
    };
    for (const [key, value] of Object.entries(requiredFields)) {
      console.log(`${key}: ${value}`);
      if (value === '' || value === null) {
        ShowNotification(`${key} is required`);
        return;
      }
    }

    this.setState({
      isprocessing: true,
    });
    if (email === 'test@gmail.com' && password === 'password') {
      let profile = {
        fullname: 'Jinad David Abiodun',
        pix:
          'https://media-exp1.licdn.com/dms/image/C4D03AQF3_gtzED3VWA/profile-displayphoto-shrink_400_400/0/1570082319618?e=1617235200&v=beta&t=1OASSQDrGn3WbeK671C74G45AbxNnyMQCIpVS_u4P_Y',
        gender: 'Male',
        username: 'David',
      };
      console.log(profile);

      let token_data = {
        accessToken: 'token',
        isloggedin: true,
      };

      let data2save = Object.assign({}, profile, token_data);
      console.log(data2save, 'popo_data2save');

      this.PasistLoginRecord(profile, data2save);

      ShowNotification('login successful');
      this.gotoPage('SignedIn');

      this.setState({
        isprocessing: false,
      });
    } else {
      ShowNotification('Invalid Credentials');
      this.setState({
        isprocessing: false,
      });
    }
  };

  render() {
    const {canUseBiometric, isprocessing} = this.state;
    return (
      <View style={{backgroundColor: '#06070D'}}>
        <ImageBackground
          source={BgVector}
          style={[
            styles.conatainer,
            {
              width: deviceWidth,
              // minHeight: deviceHeight,
              width: '100%',
            },
          ]}>
          <ScrollView
            contentContainerStyle={{
              width: deviceWidth,
              // backgroundColor: 'red',
              minHeight: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={[styles.fullwidth, {padding: 15, marginBottom: 40}]}>
              <View style={[styles.fullwidth, {position: 'relative'}]}>
                <Image source={Subtract} style={styles.circleLogo}></Image>
              </View>
            </View>
            <View style={[styles.fullwidth, {padding: 15}]}>
              <CustomText
                textSize={24}
                textWeight={'600'}
                textcolor={'#FFF'}
                displayText={'Adventures'}
              />
              <CustomText
                textSize={24}
                textWeight={'600'}
                textcolor={'#FFF'}
                displayText={'in literature.'}
                textStyle={styles.mgtText1}
              />
              <CustomText
                textSize={12}
                textWeight={'500'}
                textcolor={'#FFF'}
                displayText={'Join our community'}
              />
            </View>
            <View style={styles.loginSection}>
              <CustomText
                textSize={16}
                textWeight={'bold'}
                textcolor={'#06070D'}
                displayText={'Log in'}
              />
              <CusInput
                placeholder="Email"
                name="email"
                defaultValue={this.state.email}
                keyboardType={'email-address'}
                onChangeHandler={(email) =>
                  this.handleInputChange('email', email)
                }
              />
              <CusInput
                placeholder="Password"
                showTogglePass={true}
                secure={true}
                onChangeHandler={(password) =>
                  this.handleInputChange('password', password)
                }
                name="password"
                defaultValue={this.state.password}
              />
              <Button
                // handelButtonPress={() => {
                //   this.gotoPage('Books');
                // }}
                btnStyle={styles.btnAcctStyle3}
                textStyle={styles.btnReadFulltext}
                btnText={isprocessing === true ? busy : 'Sign in'}
                handelButtonPress={this._LoginHandler}
              />
              {canUseBiometric ? (
                <View style={styles.FingerPrintWrap}>
                  <TouchableOpacity onPress={this.startFingerPrintAuth}>
                    <Image
                      source={FingerPrint}
                      style={styles.FingerPrintImg}></Image>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  conatainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circleLogo: {
    width: 20,
    height: 40,
  },
  fullwidth: {
    width: '100%',
  },
  halfCircle: {
    position: 'absolute',
    width: 15,
    height: 30,
    left: -10,
    backgroundColor: '#06070D',
  },
  mgtText1: {
    marginBottom: 35,
  },
  loginSection: {
    padding: 35,
    backgroundColor: '#FDFDFD',
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    width: '100%',
    display: 'flex',
  },
  FingerPrintImg: {
    width: 24.01,
    height: 31.99,
  },
  FingerPrintWrap: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});
