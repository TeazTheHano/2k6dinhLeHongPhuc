import React, { Component, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StatusBar, View, Text, ScrollView, useColorScheme, TouchableOpacity, ImageBackground, Image, Animated, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { vw, vh, vmax, vmin } from "react-native-expo-viewport-units";
import { backAndShare, header3item, marginBottomForScrollView } from '../assets/component';
import { colorStyle, } from '../assets/componentStyleSheet';
import { Sig20Bold } from '../assets/Class';
import { searchIcon } from '../assets/svgXml';
import styles from '../assets/stylesheet';
import DATA from '../assets/DATA';

export default function Home() {
    // navigation
    const navigation = useNavigation();

    // data
    const [songList, setSongList] = useState(DATA);

    // style
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    // state
    const [currentPlayList, setCurrentPlayList] = useState(0);

    // function
    const gesture = () => {
        const [isSwipe, setIsSwipe] = useState(0);
        let startX; // Declare and initialize startX here

        return (
            <View
                style={[styles.w100, styles.flexRow,]}
                horizontal={true}
                onTouchStart={(event) => {
                    startX = event.nativeEvent.pageX; // Initialize startX on touch start
                    // setIsSwipe(0);
                }}
                onTouchEnd={(event) => {
                    // Calculate the difference between starting and ending positions
                    const endX = event.nativeEvent.pageX;
                    const direction = endX - startX;

                    // Adjust the threshold for detecting a left swipe
                    if (direction < -50) { // Adjust the threshold value to your preference
                        // Left swipe
                        setIsSwipe(1);
                        setCurrentPlayList(currentPlayList + 1)
                        console.log('Thao tác vuốt trái - ' + currentPlayList);
                    } else if (direction > 0) {
                        // Right swipe
                        setIsSwipe(2);
                        setCurrentPlayList(currentPlayList - 1)
                        console.log('Thao tác vuốt phải - ' + currentPlayList);
                    }
                }}
            >
                {songList.playList.map((item, index) => {
                    return (
                        <Animated.View key={index} style={{ marginHorizontal: vw, zIndex: index == currentPlayList ? 1 : -1, opacity: index == currentPlayList ? 1 : 0.5 }}>
                            <View style={[styles.alignSelfCenter, styles.positionRelative, styles.borderRadius10, { backgroundColor: colorStyle.white, opacity: index == currentPlayList ? 1 : 0 }]}>
                                <Sig20Bold style={[styles.paddingV10H20, { color: colorStyle.main1, }]}>{item.listName}</Sig20Bold>
                            </View>
                            <View style={{ transform: [{ scale: index == currentPlayList ? 1 : 0.8 }] }}>
                                <TouchableOpacity
                                    style={[styles.w100, styles.borderRadius20, styles.overflowHidden, { height: vw(45), width: vw(70), marginTop: vw(3) }]}
                                    onPress={() => { navigation.navigate('Game') }}>
                                    <Image source={item.listImage} style={[styles.image100CoverCenter,]} />
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    );
                })}
            </View>
        );
    };

    // const playlist = () => {
    //     return (
    //         <View style={[styles.w100, styles.flexRow, styles.alignItemsCenter,]}>
    //             {songList.playList.map((item, index) => {
    //                 return (
    //                     <View key={index} style={{ marginHorizontal: vw, zIndex: index == currentPlayList ? 1 : -1, opacity: index == currentPlayList ? 1 : 0.5 }}>
    //                         <View style={[styles.alignSelfCenter, styles.positionRelative, styles.borderRadius10, { backgroundColor: colorStyle.white }]}>
    //                             <Sig20Bold style={[styles.paddingV10H20, { color: colorStyle.main1, }]}>{item.listName}</Sig20Bold>
    //                         </View>
    //                         <TouchableOpacity
    //                             style={[styles.w100, styles.borderRadius20, styles.overflowHidden, { height: vw(45), width: vw(70), marginTop: vw(3) }]}
    //                             onPress={() => { navigation.navigate('Game') }}>
    //                             <Image source={item.listImage} style={[styles.image100CoverCenter]} />
    //                         </TouchableOpacity>
    //                     </View>
    //                 );
    //             })}
    //         </View>
    //     );
    // }

    // render
    return (
        <SafeAreaView style={[colorStyle.white, styles.flex1,]}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={colorStyle.white}
            />
            {header3item('Tên-APP', searchIcon(vw(6), vw(6), 'white'), () => { }, colorStyle.main2, colorStyle.white,)}
            <ImageBackground source={require('../assets/images/BGImage1.jpg')} style={[styles.flex1]}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={[styles.flex1,]}>

                    {gesture()}
                    {/* {playlist()} */}

                    {marginBottomForScrollView()}
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
}