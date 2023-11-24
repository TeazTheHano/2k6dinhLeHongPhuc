import React, { Component, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "./stylesheet";
import { vw, vh, vmax, vmin } from "react-native-expo-viewport-units";
import componentStyle, { colorStyle } from './componentStyleSheet';
import Svg, { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

// FONT SECTION

export class Sig20Bold extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'SignikaNegative-Bold', fontSize: vw(5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Sig24Bold extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'SignikaNegative-Bold', fontSize: vw(6) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Sig28Bold extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'SignikaNegative-Bold', fontSize: vw(7) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Sig32Bold extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'SignikaNegative-Bold', fontSize: vw(8) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoDP12Med extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSansDisplay_Condensed-Medium', fontSize: vw(3) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoDP14Med extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSansDisplay_Condensed-Medium', fontSize: vw(3.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoDP16Med extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSansDisplay_Condensed-Medium', fontSize: vw(4) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoDP18Med extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSansDisplay_Condensed-Medium', fontSize: vw(4.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoDP20Med extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSansDisplay_Condensed-Medium', fontSize: vw(5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Noto12Reg extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSans-Regular', fontSize: vw(3) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Noto14Reg extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSans-Regular', fontSize: vw(3.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Noto16Reg extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSans-Regular', fontSize: vw(4) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Noto18Reg extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSans-Regular', fontSize: vw(4.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoBP12Bold extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSansDisplay_Condensed-Black', fontSize: vw(3) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoBP14Bold extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSansDisplay_Condensed-Black', fontSize: vw(3.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoBP16Bold extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSansDisplay_Condensed-Black', fontSize: vw(4) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoBP18Bold extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSansDisplay_Condensed-Black', fontSize: vw(4.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoBP20Bold extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSansDisplay_Condensed-Black', fontSize: vw(5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoBP24Bold extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSansDisplay_Condensed-Black', fontSize: vw(6) }, style]}>
                {children}
            </Text>
        );
    }
}
