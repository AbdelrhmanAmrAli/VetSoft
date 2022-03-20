//import liraries
import React from 'react';
import { TouchableOpacity,Text,View, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { FontSize } from '../../enums/enums';
import {GeneralStyles,SettingsStyle} from '../../styles';

// create a component
const SettingsComponent = (props) => {
    return (
        <ScrollView style={GeneralStyles.containerStyle}>
            {
                props.SettingsOptions.map(({title,IconName,IconType,onPress},index)=>(
                    <TouchableOpacity key={title}>
                        <View style={SettingsStyle.ItemSettingContainer}>
                            {
                                (IconName && IconType) &&
                                <Icon name={IconName} type={IconType} size={FontSize.Medium} style={GeneralStyles.boldTextStyle}/>
                            }
                            <Text style={GeneralStyles.boldTextStyle}> &nbsp; {title} </Text>
                        </View>

                        <View style={GeneralStyles.seperatorSection}>

                        </View>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    );
};

//make this component available to the app
export  {SettingsComponent};
