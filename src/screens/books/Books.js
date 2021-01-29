import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View} from 'native-base';
import {Image as Img} from 'react-native';
import StarRating from 'react-native-star-rating';
import CustomizeHeader from '../frags/CustomizeHeader';
import CustomText from '../component/customText/CustomText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {observer} from 'mobx-react';
import {ScrollView} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';
import Home from '../../assets/images/home.png';
import Bookmark from '../../assets/images/bookmark.png';
import Shop from '../../assets/images/shop.png';
import Settings from '../../assets/images/settings.png';
import apiroutes from '../../services/apiroutes';
import {handleError} from '../../factories/ErrorHandler';
import {handleAPICall} from '../../services/apiservice';
import {BookList} from '../../models/booksModel';
import {ShowNotification} from '../../dependency/UtilityFunctions';
import CusInput from '../component/customInputs/CustomInputs';

import {
  GetPersistData,
  activityspiner,
} from '../../dependency/UtilityFunctions';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
const _getBooks = '_getBooks';
const _getNewBooks = '_getNewBooks';
@observer
class Books extends Component {
  state = {
    starCount: 3.5,
    BookLists: [],
    NewBookLists: [],
    loadingbook: true,
    searchQuery: 'React Native',
    showSeachInput: false,
    userProfile: {},
  };

  async componentDidMount() {
    let userdetails = await GetPersistData('loggedinUserdetails');
    console.log(userdetails);
    this.setState(
      {
        userProfile: userdetails,
      },
      () => {
        this.GetBooks();
        this.GetNewBooks();
      },
    );
  }

  gotoPage = (page, param) => {
    console.warn(page);
    this.props.navigation.navigate(page, {
      data: param,
    });
  };

  GetBooks = () => {
    // let defaultSearch = 'java';
    const {searchQuery} = this.state;
    let payload = {};
    this.setState({
      loadingbook: true,
    });
    handleAPICall(apiroutes.seachBooks(searchQuery), 'get', null, payload)
      .then((res) => {
        console.log(res, 'sophiaaa');
        this.setState({
          loadingbook: false,
        });
        this.handleAPIResponse(res.data, _getBooks);
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          loadingbook: false,
        });
        let errroMessage = handleError(err);
        console.log(errroMessage, 'errroMessage');
        ShowNotification(errroMessage);
      });
  };
  GetNewBooks = () => {
    let payload = {};
    this.setState({
      loadingNewbook: true,
    });
    handleAPICall(apiroutes.getNewBooks(), 'get', null, payload)
      .then((res) => {
        console.log(res, 'sophiaaa');
        this.setState({
          loadingNewbook: false,
        });
        this.handleAPIResponse(res.data, _getNewBooks);
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          loadingNewbook: false,
        });
        let errroMessage = handleError(err);
        console.log(errroMessage, 'errroMessage');
        ShowNotification(errroMessage);
      });
  };

  handleAPIResponse = (res, resType) => {
    console.log(res);
    switch (resType) {
      case _getBooks:
        let thiserror = res.error;
        if (thiserror !== '0') {
          ShowNotification('An error Occured, Please reload');
        } else {
          // console.log(res.books);

          console.log(res, 'GetChurchParish');
          let bookResult = BookList(res);
          console.log(bookResult);
          this.setState({
            BookLists: bookResult[0],
          });
        }
        break;
      case _getNewBooks:
        let hasError = res.error;
        if (hasError !== '0') {
          ShowNotification('An error Occured, Please reload');
        } else {
          let bookResult = BookList(res);
          console.log(bookResult);
          this.setState({
            NewBookLists: bookResult[0],
          });
        }
        break;

      default:
        break;
    }
  };
  SearchForArticle = (query) => {
    let stringlenght = query.length;
    if (stringlenght < 4) {
      return;
    }
    this.setState(
      {
        searchQuery: query,
      },
      () => {
        this.GetBooks();
      },
    );
  };
  ShowSeachInput = () => {
    const {showSeachInput} = this.state;
    this.setState({
      showSeachInput: !showSeachInput,
    });
  };
  saveForLater = () => {
    alert('coming soon');
  };
  render() {
    const {
      BookLists,
      NewBookLists,
      loadingbook,
      loadingNewbook,
      showSeachInput,
    } = this.state;

    let BookListView = BookLists.map((singleRecord, index) => {
      let isbn = singleRecord.isbn13;
      return (
        <TouchableOpacity
          style={[styles.AddedCardBtn, {maxWidth: 126, overflow: 'hidden'}]}
          onPress={() => this.gotoPage('ViewBook', isbn)}
          key={index}>
          <View style={[{width: 126, overflow: 'hidden', borderRadius: 5}]}>
            <Img
              source={{uri: singleRecord.image}}
              style={{
                height: 172,
                aspectRatio: 1.23,
                resizeMode: 'cover',
                marginLeft: -45,
              }}
            />
          </View>
          <CustomText
            numberOfLines={1}
            textSize={16}
            textWeight={'bold'}
            textcolor={'#06070D'}
            displayText={singleRecord.title}
            textStyle={{marginTop: 15}}
          />
          <CustomText
            textSize={12}
            textWeight={'500'}
            textcolor={'#06070D'}
            displayText={singleRecord.authour}
            textStyle={styles.textHeader}
          />
        </TouchableOpacity>
      );
    });
    let NewBookListView = NewBookLists.map((singleRecord, index) => {
      let isbn = singleRecord.isbn13;
      return (
        <TouchableOpacity
          style={styles.AddedCardBtn}
          onPress={() => this.gotoPage('ViewBook', isbn)}
          key={index}>
          <View style={styles.transactionList}>
            <View style={styles.newBookWrap}>
              <Img
                source={{uri: singleRecord.image}}
                style={styles.newBookImg}
              />
              <View style={styles.newBookDetailsWrap}>
                <View style={styles.transactionHeader2}>
                  <CustomText
                    numberOfLines={1}
                    textSize={16}
                    textWeight={'600'}
                    textcolor={'#06070D'}
                    displayText={singleRecord.title}
                  />

                  <TouchableOpacity
                    onPress={() => {
                      this.saveForLater;
                    }}>
                    <FontAwesome
                      name="bookmark-o"
                      style={{fontSize: 18, color: '#06070D'}}
                    />
                  </TouchableOpacity>
                </View>
                <CustomText
                  textSize={12}
                  textWeight={'500'}
                  textcolor={'#aaa'}
                  displayText={singleRecord.authour}
                />
                <View style={{width: 100, marginTop: 23}}>
                  <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={singleRecord.starrate}
                    starSize={20}
                    starStyle={{color: '#FFC41F'}}
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
    return (
      <View
        style={[
          styles.conatainer,
          {
            backgroundColor: '#FCFCFC',
            width: deviceWidth,
            minHeight: deviceHeight,
          },
        ]}>
        <CustomizeHeader
          leftside="user"
          title=""
          right="search"
          HeaderBgColor="#fff"
          HeaderStatusColor="#ccc"
          ShowNotification={true}
          toggleSeachInout={this.ShowSeachInput}
        />
        {showSeachInput === true ? (
          <View style={{paddingLeft: 15, paddingRight: 15}}>
            <CusInput
              placeholder="Search"
              onChangeHandler={(query) => this.SearchForArticle(query)}
              name="email"
              defaultValue={this.state.email}
            />
          </View>
        ) : null}

        <View style={{padding: 15, paddingBottom: 0}}>
          <CustomText
            textSize={20}
            textWeight={'bold'}
            textcolor={'#06070D'}
            displayText={'Popular Books'}
            textStyle={styles.textHeader}
          />
        </View>
        <View style={[styles.rowFlex, {width: deviceWidth}]}>
          <View style={{width: '100%'}}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{
                paddingLeft: 1,
                paddingRight: 1,
                minWidth: '50%',
              }}
              showsHorizontalScrollIndicator={false}>
              {loadingbook === true
                ? activityspiner(loadingbook)
                : BookListView}

              {/* <TouchableOpacity style={styles.AddedCardBtn} onPress={() => this.gotoPage('ViewBook')}>
              //   <Img source={Book1} style={styles.bookLogo} />
              //   <CustomText
              //     textSize={16}
              //     textWeight={'bold'}
              //     textcolor={'#06070D'}
              //     displayText={'Fashionopolis'}
              //     textStyle={{ marginTop: 15 }}
              //   />
              //   <CustomText
              //     textSize={12}
              //     textWeight={'500'}
              //     textcolor={'#06070D'}
              //     displayText={'Dana Thomas'}
              //     textStyle={styles.textHeader}
              //   />
              // </TouchableOpacity>
              // */}
            </ScrollView>
          </View>
        </View>

        <View style={styles.transactionWrap}>
          <View style={styles.transactionHeader}>
            <CustomText
              textSize={20}
              textWeight={'bold'}
              textcolor={'#06070D'}
              displayText={'Newest'}
            />
          </View>
          <ScrollView>
            {loadingNewbook === true
              ? activityspiner(loadingNewbook)
              : NewBookListView}
            {/* <View style={styles.transactionList}>
              <View style={styles.newBookWrap}>
                <Img source={Newbook1} style={styles.newBookImg} />
                <View style={styles.newBookDetailsWrap}>
                  <View style={styles.transactionHeader2}>
                    <CustomText
                      textSize={16}
                      textWeight={'600'}
                      textcolor={'#06070D'}
                      displayText={'Yves Saint Laurent'}
                    />

                    <TouchableOpacity>
                      <FontAwesome
                        name="bookmark-o"
                        style={{fontSize: 18, color: '#06070D'}}
                      />
                    </TouchableOpacity>
                  </View>
                  <CustomText
                    textSize={12}
                    textWeight={'500'}
                    textcolor={'#aaa'}
                    displayText={'Suzy Menkes'}
                  />
                  <View style={{width: 100, marginTop: 23}}>
                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={this.state.starCount}
                      starSize={20}
                      selectedStar={(rating) => this.onStarRatingPress(rating)}
                      starStyle={{color: '#FFC41F'}}
                    />
                  </View>
                </View>
              </View>
            </View>
          */}
          </ScrollView>
        </View>
        <View style={[styles.borderBottomWrap, {padding: 15, paddingTop: 0}]}>
          <View style={styles.borderBottomSty}>
            <TouchableOpacity>
              <Img source={Home} style={{width: 18, height: 18.73}} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Img source={Bookmark} style={{width: 14, height: 20.64}} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Img source={Shop} style={{width: 20.9, height: 21.24}} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Img source={Settings} style={{width: 20, height: 19.28}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default Books;

const styles = StyleSheet.create({
  conatainer: {
    display: 'flex',
  },
  textHeader: {
    marginBottom: 5,
  },
  rowFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    paddingTop: 4,
  },
  AddedCardBtn: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    minWidth: 126,
    elevation: 0,
    marginRight: 10,
    marginBottom: 1,
  },
  bookLogo: {
    height: 182,
    maxHeight: 182,
    minHeight: 182,
    maxWidth: 126,
    minWidth: 126,
    width: 126,
    borderRadius: 5,
  },
  newBookImg: {
    height: 106,
    aspectRatio: 1.2,
    marginLeft: -15,
  },
  transactionWrap: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    paddingBottom: 16,
  },
  transactionHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: 0,
  },
  transactionList: {
    display: 'flex',
    paddingBottom: 12,
    marginLeft: 15,
    marginRight: 15,
    borderTopWidth: 0,
    borderTopColor: '#E1DFEA',
  },
  newBookWrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  newBookDetailsWrap: {
    display: 'flex',
    flex: 1,
  },
  transactionHeader2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  borderBottomWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  borderBottomSty: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    borderRadius: 22,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#fff',
    elevation: 3,
  },
});
