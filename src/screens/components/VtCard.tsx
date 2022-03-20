import React from "react";
import { View  } from "react-native";
import {GeneralStyles} from '../../styles';

const VtCard = (props: any) => {
    return (
        <View  style={GeneralStyles.cardStyle}>
            {props.children}
        </View>
    );
};

export {VtCard};