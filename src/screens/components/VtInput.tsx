import React from "react";
import { Text , TextInput, View  } from "react-native";
import {GeneralStyles} from '../../styles';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
//--------------------------------------------------------------------
const VtInput = (props: any) => (
        <View style={GeneralStyles.inputContainerStyle}>
            {/* {
                props.IconName ? <FontAwesomeIcon icon={props.IconName} /> : null
            } */}
             <Text style={GeneralStyles.labelStyle}>{props.Label}</Text>
            <TextInput 
                        placeholder={props.Placeholder}  
                        style={GeneralStyles.inputStyle}
                        secureTextEntry= {props.IsSecureTextEntry}
                        autoCorrect={props.IsAutoCorrect}
                        onChangeText = {props.onChangeText}
            />
        </View>
    );
//----------------------------------------------------------------------
export {VtInput};