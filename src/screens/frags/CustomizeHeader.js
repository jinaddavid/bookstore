import React, {Component, Fragment} from 'react';
import {View, StyleSheet, Platform, StatusBar, Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Title} from 'native-base';
import {Header, Button} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomText from '../component/customText/CustomText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AntDesign from 'react-native-vector-icons/AntDesign';
import SvgUri from 'react-native-svg-uri';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GetPersistData} from '../../dependency/UtilityFunctions';

class CustomizeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin_userid: '',
      fullname: '',
      Myid: '',
      NotificationCount: 0,
      userProfile: {},
    };
  }

  async componentDidMount() {
    let userdetails = await GetPersistData('loggedinUserdetails');
    console.log(userdetails);
    this.setState({
      userProfile: userdetails,
    });
  }

  goto = (screen) => {
    this.props.navigation.navigate(screen);
  };

  render() {
    const {userProfile} = this.state;
    let TextCOlor = this.props.textColor || '#333';
    let title = '';
    return (
      <Header
        style={{
          backgroundColor: '#fff',
          borderBottomColor: '#fff',
          borderBottomWidth: 0,
          elevation: 0,
          fontSize: 11,
          width: '100%',
          minWidth: '100%',
          maxWidth: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <StatusBar
          backgroundColor="#000"
          barStyle="light-content"
          animated={true}
          StatusBarAnimation="slide"
        />
        <View>
          {this.props.leftside == 'user' ? (
            <TouchableOpacity style={styles.userWrap}>
              <Image
                source={{
                  uri: userProfile.pix,
                }}
                style={styles.userImage}
              />
              <CustomText
                textSize={14}
                textWeight={'bold'}
                textcolor={'#06070D'}
                displayText={userProfile.username}
              />
            </TouchableOpacity>
          ) : this.props.leftside == 'Back' ? (
            <Button
              transparent
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Entypo
                name="chevron-left"
                style={{color: '#180c62', fontSize: 16}}
              />
            </Button>
          ) : this.props.leftside == 'empty' ? (
            <Button
              style={{backgroundColor: 'transparent', elevation: 0}}></Button>
          ) : (
            <Button
              transparent
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <SvgUri
                width="20"
                height="10"
                source={{
                  uri:
                    'https://res.cloudinary.com/vaccinenudge/image/upload/v1594433599/vaccinenudge_mobile/arrbackBlc_jacci9.svg',
                }}
              />
            </Button>
          )}
        </View>
        <View
          style={
            this.props.ShowNotification
              ? styles.headerBody
              : styles.headerBody_2
          }>
          <Title
            style={{
              color: TextCOlor,
              fontWeight: 'normal',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            {' '}
            {this.props.title || title}
          </Title>
        </View>

        {this.props.ShowNotification === true ? (
          <View>
            {this.props.right == 'search' ? (
              <TouchableOpacity onPress={this.props.toggleSeachInout}>
                <AntDesign
                  name="search1"
                  style={{fontSize: 20, color: '#06070D'}}
                />
              </TouchableOpacity>
            ) : this.props.right == 'moreAction' ? (
              <Fragment>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Button transparent>
                    <FontAwesome
                      name="bookmark-o"
                      style={styles.iconsizeNcolour}
                    />
                  </Button>
                  <Button transparent>
                    <MaterialCommunityIcons
                      name="dots-vertical"
                      style={styles.iconsizeNcolour}
                    />
                  </Button>
                </View>
              </Fragment>
            ) : (
              <Button
                style={{backgroundColor: 'transparent', elevation: 0}}></Button>
            )}
          </View>
        ) : null}
      </Header>
    );
  }
}

export default withNavigation(CustomizeHeader);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  churchImage: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
  },
  userImage: {
    width: 35,
    height: 35,
    borderRadius: 10,
    marginRight: 12,
  },
  userImage2: {
    width: 35,
    height: 35,
    borderRadius: 10,
  },
  iconsizeNcolour: {
    fontSize: 20,
    color: '#000',
  },
  text1: {
    fontSize: 13,
    color: '#fff',
  },
  headerBody: {
    ...Platform.select({
      ios: {
        marginLeft: -150,
      },
      android: {
        marginLeft: -8,
      },
    }),
  },
  headerBody_2: {
    ...Platform.select({
      ios: {
        marginLeft: -80,
      },
      android: {
        marginLeft: -80,
      },
    }),
  },
  // continueBtn: {
  //   backgroundColor: "#6ed48f",
  //   borderRadius: 5,
  //   elevation: 0,
  //   borderWidth: 1,
  //   borderColor: "#6ed48f",
  //   display: 'flex',
  //   alignItems: 'center',
  //   paddingTop: 8,
  //   paddingLeft: 15,
  //   paddingRight: 15,
  //   paddingBottom: 8,
  // },
  continueBtn: {
    // backgroundColor: "#001f90",
    backgroundColor: '#6ed48f',
    elevation: 0,
    display: 'flex',
    paddingTop: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 1,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    // marginTop: 20,
    borderWidth: 0,
    // width: "100%"
  },
  userWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
  },
});
