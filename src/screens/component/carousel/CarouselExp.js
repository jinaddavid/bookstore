import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    SafeAreaView, Dimensions
} from 'react-native';
import { withNavigation } from 'react-navigation';

import Carousel from 'react-native-snap-carousel';
import Button from '../button/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
let manageHeight = deviceHeight - 220;
let manageWidth = deviceWidth - 40;


class GenCarousel extends React.Component {


    // constructor(props) {
    //     super(props);
    state = {
        activeIndex: 0,
        carouselItems: [
            {
                image: "https://res.cloudinary.com/samplechurch/image/upload/v1598609010/mobileAssets/churchlogo1_hx9quk.png",
                churchName: "The Redeemed Christian Church of God",
                text: "Select Church",
            },
            {
                image: "https://res.cloudinary.com/samplechurch/image/upload/v1598609009/mobileAssets/churchlogo2_bwlala.png",
                churchName: "Living Faith Church",
                text: "Select Church",
            },
            {
                image: "https://res.cloudinary.com/samplechurch/image/upload/v1598609010/mobileAssets/churchlogo1_hx9quk.png",
                churchName: "The Redeemed Christian Church of God",
                text: "Select Church",
            },
            {
                image: "https://res.cloudinary.com/samplechurch/image/upload/v1598609009/mobileAssets/churchlogo2_bwlala.png",
                churchName: "Living Faith Church",
                text: "Select Church",
            },

        ]
    }

    gotoPage = (page) => {
        alert('am here')
        // this.props.navigation.navigate(page, {})
    }
    _renderItem({ item, index }) {
        return (
            <View style={styles.carouselItems}>
                <Image source={{ uri: item.image }} style={styles.imageStyle} />
                <Text style={styles.churchNameSty}>{item.churchName}</Text>
                <Button
                    // handelButtonPress ={() => { this.props.navigation.navigate("ChurchState") }}
                    // handelButtonPress ={() => { this.gotoPage("ChurchState") }}
                    btnText={item.text}
                />
            </View>

        )
    }

    render() {
        return (
            <TouchableOpacity style={styles.carouseWrap}
            onPress ={() => { this.props.navigation.navigate("Parish") }}
            >
                <Carousel
                    layout={"tinder"}
                    loop={true}
                    //   layoutCardOffset={`9`}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={manageWidth}
                    itemWidth={manageWidth}
                    renderItem={this._renderItem}
                    onSnapToItem={index => this.setState({ activeIndex: index })} />
            </TouchableOpacity>
        );
    }
}
export default withNavigation(GenCarousel)

const styles = StyleSheet.create({
    carouseWrap: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        paddingRight: 13.7,
        paddingLeft: 20,
        width: deviceWidth,
        paddingBottom: 15,
        paddingTop: 15,
        zIndex: 1
    },
    carouselItems: {
        backgroundColor: '#fff',
        borderRadius: 10,
        height: manageHeight,
        padding: 50,
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        elevation: 1,
    },
    imageStyle: {
        width: 134,
        height: 134,
    },
    churchNameSty: {
        fontSize: 20,
        color: '#333',
        textAlign: "center",
        marginBottom: 45,
        marginTop: 50,
    },
    GeneralBtnSty:{
        backgroundColor: "#396c54",
        borderRadius: 5,
        paddingBottom: 15,
        paddingTop: 15,
        paddingRight: 30,
        paddingLeft: 30,
        elevation: 0,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        alignSelf:"center",
      },
      GeneralTextSty:{
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
      },

})

