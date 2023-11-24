import React, { Component } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StatusBar, View, Text, ScrollView, useColorScheme, TouchableOpacity, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { vw, vh, vmax, vmin } from "react-native-expo-viewport-units";
import { backAndShare, header3item } from '../assets/component';
import { colorStyle, } from '../assets/componentStyleSheet';
import { Sig20Bold } from '../assets/Class';
import { searchIcon } from '../assets/svgXml';

export default function Home() {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const navigation = useNavigation();

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            {header3item('Home', searchIcon(vw(6), vw(6), 'white'), () => { }, colorStyle.main2, colorStyle.white,)}
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}