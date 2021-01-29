import React, { Fragment } from "react";
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    LayoutAnimation,
    Platform,
    UIManager,
    TouchableOpacity,
    Dimensions
} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get("window");
import CustomText from '../customText/CustomText';

import { TouchableOpacity as RNGHTouchableOpacity } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
// import SwipeableItem from "./SwipeableItem";
import SwipeableItem from 'react-native-swipeable-item';
import DraggableFlatList from "react-native-draggable-flatlist";
const { multiply, sub } = Animated;

const isAndroid = Platform.OS === "android";

if (isAndroid && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const PlatformTouchable = isAndroid ? TouchableOpacity : TouchableOpacity;

const NUM_ITEMS = 2;
function getColor(i) {
    const multiplier = 255 / (NUM_ITEMS - 1);
    const colorVal = i * multiplier;
    return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
}

const initialData = [...Array(NUM_ITEMS)].fill(0).map((d, index) => ({
    text: `Row ${index}`,
    key: `key-${index}`, // Note: It's bad practice to use index as your key. Don't do it in production!
    backgroundColor: getColor(index),
    hasLeft: index % 3 === 0 || index % 3 === 1,
    hasRight: index % 3 === 0 || index % 3 === 2
}));

class App extends React.Component {
    state = {
        data: initialData
    };

    itemRefs = new Map();

    deleteItem = item => {
        const updatedData = this.state.data.filter(d => d !== item);
        // Animate list to close gap when item is deleted
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({ data: updatedData });
    };

    renderUnderlayLeft = ({ item, percentOpen }) => (
        <Animated.View
            style={[styles.row, styles.underlayLeft, { opacity: percentOpen }]} // Fade in on open
        >
            <PlatformTouchable onPressOut={() => this.deleteItem(item.item)}>
                <Text style={styles.text}>{`[x]`}</Text>
            </PlatformTouchable>
        </Animated.View>
    );

    renderUnderlayRight = ({ item, percentOpen, close }) => (
        // <Animated.View
        //   style={[
        //     styles.row,
        //     styles.underlayRight,
        //     {
        //       transform: [{ translateX: multiply(sub(1, percentOpen), -30) }] // Translate from left on open
        //     }
        //   ]}
        // >
        <TouchableOpacity style={styles.underlayRight} onPressOut={close}>
            <AntDesign name="closecircle" style={{ fontSize: 20, color: "#FFF" }} />
        </TouchableOpacity>
        // </Animated.View>
    );

    renderOverlay = ({ item, openLeft, openRight, openDirection, close }) => {
        const { text, backgroundColor, hasLeft, hasRight } = item.item;
        return (
            <Fragment>
                {hasRight && (
                    // <PlatformTouchable
                    //     onPressOut={!!openDirection ? close : () => openRight(1)}
                    // >
                    //     <Text style={styles.text}>{`<`}</Text>
                    // </PlatformTouchable>
                    <TouchableOpacity onPressOut={!!openDirection ? close : () => openRight(1)} style={[styles.cardViewList, { backgroundColor: "#FFF", elevation: 1, borderWidth: 1, borderColor: "#ccc" }]}>

                        <View style={[styles.rowSpaceBtw, { width: "100%", marginBottom: 5 }]}>

                            <View style={styles.row1}>
                                <CustomText
                                    textSize={13}
                                    textWeight={"500"}
                                    textcolor={"#333333"}
                                    displayText={"Offering"}
                                />
                                <CustomText
                                    textSize={12}
                                    textWeight={"500"}
                                    textcolor={"#333333"}
                                    displayText={" - "}
                                />
                                <CustomText
                                    textSize={12}
                                    textWeight={"500"}
                                    textcolor={"#867e86"}
                                    displayText={"29th"}
                                // textStyle={styles.mgtText1}
                                />
                            </View>

                            <View style={styles.row1}>
                                <CustomText
                                    textSize={12}
                                    textWeight={"500"}
                                    textcolor={"#333333"}
                                    displayText={"N128,000"}
                                />

                            </View>

                        </View>

                        <View style={[styles.rowSpaceBtw, { width: "100%" }]}>
                            <View style={styles.row1}>
                                <CustomText
                                    textSize={12}
                                    textWeight={"500"}
                                    textcolor={"#867e86"}
                                    displayText={"Aenean sed lorem est. Sed quis neque"}
                                // textStyle={styles.mgtText1}
                                />
                            </View>

                            <Feather name="edit-3" style={{fontSize: 16}}/>

                        </View>

                    </TouchableOpacity>
                
                )}

            </Fragment>
        );
    };

    renderItem = ({ item, index, drag }) => {
        return (
            <SwipeableItem
                key={item.key}
                item={{ item, drag }}
                ref={ref => {
                    if (ref && !this.itemRefs.get(item.key)) {
                        this.itemRefs.set(item.key, ref);
                    }
                }}
                onChange={({ open }) => {
                    if (open) {
                        // Close all other open items
                        [...this.itemRefs.entries()].forEach(([key, ref]) => {
                            if (key !== item.key && ref) ref.close();
                        });
                    }
                }}
                overSwipe={50}
                renderUnderlayRight={this.renderUnderlayRight}
                snapPointsRight={item.hasRight ? [75,] : undefined}
                renderOverlay={this.renderOverlay}
            />
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <DraggableFlatList
                    activationDistance={15}
                    keyExtractor={item => item.key}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    onDragEnd={({ data }) => this.setState({ data })}
                />
            </View>
        );
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardViewList: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        // justifyContent: "space-around",
        elevation: 1,
        marginBottom: 10,
        padding: 15,
        borderRadius: 5
    },
    rowSpaceBtw: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        // padding: 15
    },
    row1: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    flex: {
        flex: 1
    },

    column: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        // justifyContent: "space-around",
        padding: 15
    },
   
    row: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        padding: 15
    },
   
    
    text: {
        fontWeight: "bold",
        color: "white",
        fontSize: 32
    },
    underlayRight: {
        width: 70,
        height: "87%",
        backgroundColor: "#ff4646",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    underlayLeft: {
        flex: 1,
        backgroundColor: "tomato",
        justifyContent: "flex-end"
    }
});