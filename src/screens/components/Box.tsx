
import React,{useState } from "react";
import {Text,View} from 'react-native';
import {  Icon } from 'react-native-elements';
import {IconName , IconType} from '../../enums/enums';
import {Picker} from '@react-native-picker/picker';
import Settings from './../../styles/Setting';


const Box = (props) => {
    const [selectedValue, setSelectedValue] = useState(props.Flabel);
    return (     
        <View style={Settings.container}>
          <Text style={{color:'black',borderWidth:15,borderColor:'white',fontSize: 18,paddingLeft:10}} >
             <Icon name={IconName.Settings} type={IconType.Feather} size={15}  />
            {' '}
            {props.name}
            </Text>
          <Picker
             selectedValue={selectedValue}
             style={{width: 160}}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
          >
            {/* 
              <Picker.Item label={props.Flabel} value={props.Fvalue} />
              <Picker.Item label={props.Slabel} value={props.Svalue} /> 
            */}

            {
              props.Items.map(function renderItem(item) {
                return (<Picker.Item label={item.label} value={item.id} key={item.id} />);
              })
            }
          </Picker>
        </View>
     
    );
  }

export default Box;