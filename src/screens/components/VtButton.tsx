import React from "react";
import { TouchableOpacity, Text } from "react-native";
import {GeneralStyles} from '../../styles';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const VtButton = (props:any) => {
    return (
        <TouchableOpacity  style={GeneralStyles.buttonStyle} onPress={props.onPress}>
           {/* <FontAwesomeIcon icon={props.IconName}  style={{backgroundColor : '#fff'}}/> */}
           <Text style={GeneralStyles.textButtonStyle}>
            {props.children}
           </Text>
        </TouchableOpacity>
    );
};

export {VtButton};