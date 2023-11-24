import React, { Component, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image, FlatList, ImageBackground } from "react-native";
import styles from "./stylesheet";
import { vw, vh, vmax, vmin } from "react-native-expo-viewport-units";
import componentStyle, { colorStyle } from './componentStyleSheet';
import Svg, { SvgXml } from 'react-native-svg';
import { searchIcon, leftArrow, shareIcon, logoIcon } from "./svgXml";
import { useNavigation } from '@react-navigation/native';
import { Sig28Bold } from "./Class";

export const header3item = (title, rightIcon, rightFnc, rightIconBGcolor, backgroundColor,) => {
    return (
        <View style={[styles.flexRow, styles.justifyContentSpaceBetween, styles.alignItemsCenter, styles.shadowW0H1Black, styles.w100, { backgroundColor: backgroundColor, paddingHorizontal: vw(5), paddingVertical: vw(2.5), zIndex: 10, borderBottomRightRadius: vw(4), borderBottomLeftRadius: vw(4) }]}>
            <View style={[styles.flexRow, styles.alignContentCenter, styles.gap10, styles.paddingH10]}>
                {logoIcon(vw(10), vw(10))}
                <Sig28Bold style={{ color: 'red' }}>{title}</Sig28Bold>
            </View>
            {rightIcon ?
                <TouchableOpacity
                    onPress={() => { rightFnc() }}
                    style={[{ width: vw(10), height: vw(10), borderRadius: vw(1.5), backgroundColor: rightIconBGcolor, justifyContent: 'center', alignItems: 'center' }]}>
                    {rightIcon}
                </TouchableOpacity>
                : null
            }

            <Image source={require('../assets/images/bottomBG.png')} resizeMode="cover" style={[styles.positionAbsolute, styles.w100, { zIndex: -1, bottom: 0, left: 0, borderBottomRightRadius: vw(4), borderBottomLeftRadius: vw(4) }]} />
        </View>

    )
}

export const backAndShare = () => {
    const navigation = useNavigation();
    return (
        <View style={[styles.flexRowBetweenCenter, { paddingVertical: vw(2), paddingHorizontal: vw(5) }]}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={[{ width: vw(5), height: vw(5), borderRadius: vw(2.5), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }]}>
                {leftArrow(vw(7.5), vw(7.5), "#383838")}
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { }}
                style={[{ width: vw(5), height: vw(5), borderRadius: vw(2.5), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }]}>
                {shareIcon(vw(7.5), vw(7.5), "#383838")}
            </TouchableOpacity>
        </View>
    )
}

export const notiModal = (toggle = false, topLeftNormal, centerBig, centerNormal, actionMessage, fnc, onClose) => {
    // const [isPressed, setIsPressed] = useState(toggle);
    if (toggle) {
        return (
            <View style={[styles.positionAbsolute, styles.w100vw, styles.h100vh, styles.flexRow, styles.justifyContentCenter, styles.alignItemsCenter, { backgroundColor: 'rgba(0,0,0,0.4)' }]}>
                <View style={[styles.w90, styles.flexCol, styles.gap2vw, styles.justifyContentCenter, styles.alignItemsCenter, { paddingHorizontal: vw(5), paddingVertical: vw(4), borderRadius: vw(4), backgroundColor: colorStyle.white }]}>
                    {{ topLeftNormal } ? <Text style={[componentStyle.Mon14Bold, { color: colorStyle.black }]}>{topLeftNormal}</Text> : null}
                    {{ centerBig } ? <Text style={[componentStyle.Os24Bold, { color: colorStyle.blue4 }]}>{centerBig}</Text> : null}
                    {{ centerNormal } ? <Text style={[componentStyle.Mon12Reg, { color: colorStyle.black }]}>{centerNormal}</Text> : null}
                    <View style={[styles.flexRow, styles.justifyContentCenter, styles.gap4vw, { paddingVertical: vw(2.5) }]}>
                        <TouchableOpacity
                            onPress={() => { onClose() }}
                            style={[{ borderWidth: vw(0.5), borderColor: colorStyle.blue1, borderRadius: vw(1.5), paddingVertical: vw(2.5), paddingHorizontal: vw(5) }]}>
                            <Text style={[componentStyle.Mon14Bold, { color: colorStyle.black }]}>Quay lại</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[{ borderWidth: vw(0.5), borderColor: colorStyle.blue1, borderRadius: vw(1.5), paddingVertical: vw(2.5), paddingHorizontal: vw(5), backgroundColor: colorStyle.blue1 }]}
                            onPress={() => { fnc() }}>
                            <Text style={[componentStyle.Mon14Bold, { color: colorStyle.tan1 }]}>{actionMessage}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        )
    }
}

export const marginBottomForScrollView = () => {
    return (
        <View style={{ height: vh(5), opacity: 0 }}></View>
    )
}
