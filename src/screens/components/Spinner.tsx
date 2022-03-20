import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import {GeneralStyles} from '../../styles';
// create a component
const Spinner = () => {
    return (
        <View style={GeneralStyles.spinnerStyle}>
            <ActivityIndicator size={'large'}/>
        </View>
    );
};


export {Spinner};
