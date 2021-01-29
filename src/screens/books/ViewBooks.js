import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Image as Img} from 'react-native';
import {View} from 'native-base';
import StarRating from 'react-native-star-rating';
import CustomizeHeader from '../frags/CustomizeHeader';
import Button from '../component/button/Button';
import CustomText from '../component/customText/CustomText';
import {observer} from 'mobx-react'; // import { CustomAsset } from '../../../utils/assets';
import {ScrollView} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';
import Preview from '../../assets/images/preview.png';
import Reviews from '../../assets/images/reviews.png';
import apiroutes from '../../services/apiroutes';
import {handleError} from '../../factories/ErrorHandler';
import {handleAPICall} from '../../services/apiservice';
import {SingleBookList} from '../../models/booksModel';
import {
  Communicator,
  ShowNotification,
} from '../../dependency/UtilityFunctions';

let deviceWidth = Dimensions.get('window').width;
const _getSingleBook = '_getSingleBook';

@observer
class ViewBook extends Component {
  state = {
    isActive: 'AllMember',
    recurringDate: '',
    paymentType: '',
    transactioView: 'thisWeek',
    selected: '',
    displayadayInMonth: false,
    paymentSettlement: true,
    starCount: 3.5,
    currentIsbn: '',
    SingleBook: {},
  };

  componentDidMount() {
    let data = this.props.navigation.getParam('data', '');
    this.setState(
      {
        currentIsbn: data,
      },
      () => {
        this.GetSingleBook();
      },
    );
    console.log(data);
  }
  gotoPage = (route) => {
    this.props.navigation.navigate(route);
  };
  GetSingleBook = () => {
    let payload = {};
    const {currentIsbn} = this.state;
    handleAPICall(apiroutes.singleBook(currentIsbn), 'get', null, payload)
      .then((res) => {
        this.setState({
          isprocessing: false,
        });
        this.handleAPIResponse(res.data, _getSingleBook);
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          isprocessing: false,
        });
        let errroMessage = handleError(err);
        console.log(errroMessage, 'errroMessage');
        ShowNotification(errroMessage);
      });
  };

  handleAPIResponse = (res, resType) => {
    console.log(res);
    switch (resType) {
      case _getSingleBook:
        let hasError = res.error;
        if (hasError !== '0') {
          ShowNotification('An error Occured, Please reload');
          this.setState({
            SingleBook: {},
          });
        } else {
          console.log(res, 'GetChurchParish');
          let bookResult = SingleBookList(res);
          this.setState({
            SingleBook: bookResult[0],
          });
        }
        break;

      default:
        break;
    }
  };

  render() {
    const {SingleBook} = this.state;
    return (
      <View
        style={[
          styles.conatainer,
          {
            backgroundColor: '#FDFDFD',
            width: deviceWidth,
          },
        ]}>
        <CustomizeHeader
          leftside="Back"
          title=""
          right="moreAction"
          HeaderBgColor="#fff"
          HeaderStatusColor="#ccc"
          ShowNotification={true}
        />
        <ScrollView
          contentContainerStyle={{
            padding: 15,
            paddingBottom: 50,
            display: 'flex',
            alignItems: 'center',
          }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <Img source={{uri: SingleBook.image}} style={styles.bookLogo} />
          <CustomText
            textSize={24}
            textWeight={'bold'}
            textcolor={'#06070D'}
            displayText={SingleBook.title}
            textStyle={{marginTop: 22}}
          />
          <CustomText
            textSize={16}
            textWeight={'500'}
            textcolor={'#06070D'}
            displayText={SingleBook.authors}
            textStyle={{marginTop: 12, opacity: 0.5}}
          />
          <View style={styles.starWrap}>
            <View style={{width: 100}}>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={SingleBook.rating}
                starSize={20}
                starStyle={{color: '#FFC41F'}}
              />
            </View>
            <CustomText
              textSize={16}
              textWeight={'500'}
              textcolor={'#06070D'}
              displayText={SingleBook.rating}
              textStyle={{marginLeft: 10}}
            />
            <CustomText
              textSize={16}
              textWeight={'500'}
              textcolor={'#aaa'}
              displayText={'/'}
            />
            <CustomText
              textSize={16}
              textWeight={'500'}
              textcolor={'#aaa'}
              displayText={'5.0'}
            />
          </View>
          <CustomText
            textSize={16}
            textWeight={'500'}
            textcolor={'#06070D'}
            displayText={SingleBook.desc}
            textStyle={{marginTop: 15, opacity: 0.5, lineHeight: 24}}
          />
          <View style={styles.transactionHeaderSm}>
            <TouchableOpacity
              style={styles.AddedCardBtn}
              onPress={() => Communicator('web', SingleBook.url)}>
              <Img source={Preview} style={styles.previewImg} />
              <CustomText
                textSize={16}
                textWeight={'bold'}
                textcolor={'#06070D'}
                displayText={'Preview'}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.AddedCardBtn}>
              <Img source={Reviews} style={styles.reviewsImg} />
              <CustomText
                textSize={16}
                textWeight={'bold'}
                textcolor={'#06070D'}
                displayText={'Reviews'}
              />
            </TouchableOpacity>
          </View>
          <Button
            handelButtonPress={() => Communicator('web', SingleBook.url)}
            btnStyle={styles.btnAcctStyle3}
            btnText={`Buy Now for ${SingleBook.price}`}
          />
        </ScrollView>
      </View>
    );
  }
}
export default ViewBook;

const styles = StyleSheet.create({
  conatainer: {
    display: 'flex',
  },
  AddedCardBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#fff',
    minWidth: 126,
    width: '48%',
    borderRadius: 8,
    maxWidth: 154,
  },
  bookLogo: {
    height: 320,
    width: 216,
    borderRadius: 5,
  },
  starWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginTop: 12,
  },
  transactionHeaderSm: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    width: '100%',
    // backgroundColor: "red"
  },
  previewImg: {
    height: 13,
    width: 18,
    marginRight: 20,
  },
  reviewsImg: {
    height: 18,
    width: 20,
    marginRight: 20,
  },
  btnAcctStyle3: {
    backgroundColor: '#000',
    borderRadius: 15,
    paddingBottom: 0,
    paddingTop: 0,
    paddingRight: 30,
    paddingLeft: 30,
    elevation: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
    marginTop: 20,
    marginBottom: 20,
  },
});
