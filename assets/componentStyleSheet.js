import { StyleSheet } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';

export const colorStyle = StyleSheet.create({
    white: '#FCFCFC',
    grey: '#D6D6D6',
    darkGray: '#383838',
    black: '#3C3C3C',
    main1: '#CD0000',
    main2: '#F21817',
    main3: '#FACE31',
});

const componentStyle = StyleSheet.create({

    // Font - head
    sig20Bold: {
        fontFamily: 'signikaBold',
        fontSize: vw(5),
    },

    sig24Bold: {
        fontFamily: 'signikaBold',
        fontSize: vw(6),
    },

    sig28Bold: {
        fontFamily: 'signikaBold',
        fontSize: vw(7),
    },

    sig32Bold: {
        fontFamily: 'signikaBold',
        fontSize: vw(8),
    },

    // Font - med
    notoDP12Med: {
        fontFamily: 'notoDisplayMedium',
        fontSize: vw(3),
    },

    notoDP14Med: {
        fontFamily: 'notoDisplayMedium',
        fontSize: vw(3.5),
    },

    notoDP16Med: {
        fontFamily: 'notoDisplayMedium',
        fontSize: vw(4),
    },

    notoDP18Med: {
        fontFamily: 'notoDisplayMedium',
        fontSize: vw(4.5),
    },

    notoDP20Med: {
        fontFamily: 'notoDisplayMedium',
        fontSize: vw(5),
    },

    // Font - reg
    noto12Reg: {
        fontFamily: 'notoRegular',
        fontSize: vw(3),
    },

    noto14Reg: {
        fontFamily: 'notoRegular',
        fontSize: vw(3.5),
    },

    noto16Reg: {
        fontFamily: 'notoRegular',
        fontSize: vw(4),
    },

    noto18Reg: {
        fontFamily: 'notoRegular',
        fontSize: vw(4.5),
    },

    // Font - bold
    notoBP12Bold: {
        fontFamily: 'notoDisplayBlack',
        fontSize: vw(3),
    },

    notoBP14Bold: {
        fontFamily: 'notoDisplayBlack',
        fontSize: vw(3.5),
    },

    notoBP16Bold: {
        fontFamily: 'notoDisplayBlack',
        fontSize: vw(4),
    },

    notoBP18Bold: {
        fontFamily: 'notoDisplayBlack',
        fontSize: vw(4.5),
    },


    // shadow
    shadowW0H1: {
        shadowColor: 'black',
        shadowOffset: { width: vw(0), height: vw(1) },
        shadowOpacity: 0.25,
    },

    shadowW1H1: {
        shadowColor: 'black',
        shadowOffset: { width: vw(1), height: vw(1) },
        shadowOpacity: 0.25,
    },

    shadowW0H1B1S0: {
        shadowColor: 'black',
        shadowOffset: { width: vw(0), height: vw(1) },
        shadowOpacity: 0.25,
        shadowRadius: vw(1),
    },

    shadowBtn: {
        borderBottomColor: colorStyle.main4,
        borderBottomWidth: vw(0.5),
        backgroundColor: colorStyle.main2,
    },

    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: vw(4),
        width: '90%',
        marginLeft: '5%'
    },

    loginInput: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: vw(2.5),
        borderRadius: vw(4),
        paddingHorizontal: vw(5),
        width: '100%',
    },

    loginInputText: {
        fontSize: vw(3.5),
        lineHeight: vw(4.5),
        paddingVertical: vw(4),
        paddingHorizontal: vw(2),
        width: '100%',
        height: '100%',
    },

    submitBtn: {
        borderWidth: 2,
        borderRadius: vw(4),
        width: '90%',
        marginLeft: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto'
    },

    submitBtnText: {
        fontSize: vw(4.5),
        lineHeight: vw(4.5),
        paddingVertical: vw(4.5),
    },

});

export default componentStyle;