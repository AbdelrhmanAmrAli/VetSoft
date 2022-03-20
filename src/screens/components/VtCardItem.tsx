import React from "react";
import { View  } from "react-native";
import {GeneralStyles} from '../../styles';

const VtCardItem = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
        <View style={GeneralStyles.cardItemStyle}>
            {props.children}
        </View>
    );
};

export {VtCardItem};