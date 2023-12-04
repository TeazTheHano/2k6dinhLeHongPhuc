import React, { Component, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StatusBar, View, Text, ScrollView, useColorScheme, TouchableOpacity, ImageBackground, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { vw, vh, vmax, vmin } from "react-native-expo-viewport-units";
import { backAndShare, header3item, marginBottomForScrollView } from '../assets/component';
import { colorStyle, } from '../assets/componentStyleSheet';
import { Sig20Bold } from '../assets/Class';
import { searchIcon } from '../assets/svgXml';
import styles from '../assets/stylesheet';

export default function Search() {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={[colorStyle.white, styles.flex1,]}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={colorStyle.white}
            />
            {header3item('Tìm kiếm nâng cao', null, () => { }, null, colorStyle.white,)}
            <ImageBackground source={require('../assets/images/BGImage1.jpg')} style={[styles.flex1]}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={[styles.flex1]}>


                    {marginBottomForScrollView()}
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
}