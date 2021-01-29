import React, {Component} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Keyboard,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {KeyboardAvoidingView, Alert} from 'react-native';
// import CustomizeHeader from '../frags/CustomizeHeader';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Container,
  Header,
  Content,
  Textarea,
  Button,
  View,
  Thumbnail,
  Form,
  Item,
  Input,
  Label,
  Badge,
  Icon,
  Footer,
  Picker,
  Left,
  Right,
  Body,
  Title,
  Center,
  CardItem,
  CheckBox,
} from 'native-base';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import DatePicker from 'react-native-datepicker';

import {observer} from 'mobx-react'; // import { CustomAsset } from '../../../utils/assets';
import {ScrollView} from 'react-native-gesture-handler';

// import Autocomplete from 'native-base-autocomplete'
// import { SvgUri } from 'react-native-svg';
import SvgUri from 'react-native-svg-uri';
import {withNavigation} from 'react-navigation';
import {Dimensions} from 'react-native';

import accountStore from '../../../stores/Account';

const blackColor = accountStore.BlackColor;
const primaryColor = accountStore.EdenColor;
const whiteColor = accountStore.WhiteColor;
const bgColor = accountStore.BgColor;
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

@observer
class SelectDates extends Component {
  state = {};

  render() {
    const {current_date} = this.props;

    return (
      <View style={[styles.GeneralInputSty, {position: 'relative'}]}>
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          iconSource={{
            uri:
              'https://res.cloudinary.com/vaccinenudge/image/upload/v1594378589/vaccinenudge_mobile/calendar_3_no4nhr.png',
          }}
          mode="date"
          date={current_date || ''}
          placeholder="Date of Birth(YYYY-MM-DD)"
          format="YYYY-MM-DD"
          //   minDate="1930-05-01"
          //   maxDate="2040-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          style={{
            height: 50,
            display: 'flex',
            justifyContent: 'flex-start',
            width: '100%',
          }}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: 0,
              top: 15,
              marginLeft: 0,
              width: 20,
              height: 20,
            },
            dateInput: {
              marginRight: 36,
              marginBottom: -9,
              borderWidth: 0,
              textAlign: 'left',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              fontSize: 13,
              color: blackColor,
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {
            console.log(date);
            this.props.actionHandler(date);
          }}
          {...this.props}
        />
      </View>
    );
  }
}
export default SelectDates;

// export default withNavigation(RecruiterLanding);

const styles = StyleSheet.create({
  floatLabel: {
    position: 'absolute',
    top: -8,
    fontSize: 10,
    left: 20,
    color: '#001f90',
    backgroundColor: '#fff',
    zIndex: 999999,
    paddingLeft: 5,
    paddingRight: 5,
  },
  GeneralInputSty: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingRight: 10,
    paddingLeft: 10,
    width: '100%',
    height: 50,
    color: blackColor,
    borderWidth: 0.5,
    borderColor: blackColor,
  },
  borderSty: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 1,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
});
