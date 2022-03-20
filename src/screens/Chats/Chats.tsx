import React from "react";
import { View, Text,TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { chatList } from "../../services/data/data";
import { chatListProps } from "../../services/interface";
import { GeneralStyles,ChatsStyles } from "../../styles";
import { FloatingButton, ProfileCards } from "../components";
import {Colors, IconName, IconType, KeyAsyncStorage, Screens} from '../../enums/enums';
import I18n from "../../Resources/Resource";
import { Icon } from "react-native-elements";
import asyncStorageService from "../../VetSoft/Services/asyncStorageService";
// interface ChatsProps {}
//
// eslint-disable-next-line no-empty-pattern
const Chats = (props:any) => {
  const Singout = async () =>{
    try{
        let result = await asyncStorageService.removeItemValue(KeyAsyncStorage.User)
                                            .then(resp => {return resp})
                                            .catch(error => {return {isSuccess : false , data : null , error : error} });
        if (result.isSuccess){
            props.navigation.replace(Screens.Login);
        }
        else 
            alert(result.error);
    }
    catch(exception){
        alert(exception);
    }
};

  const renderItem = ({ item }: { item: chatListProps }) => {
    return (
       <TouchableOpacity onPress={() => props.navigation.navigate(Screens.Chat,{item}) }>
          <ProfileCards {...{ item }} />
       </TouchableOpacity>
    );
  };
  
  const _renderHeader = () => {
    return (
        <View style={[GeneralStyles.screenHeaderStyle,ChatsStyles.chatsHeaderContainer]}>
          <TouchableOpacity onPress={() => props.navigation.navigate(Screens.Profile)} >
            <Text style={{fontSize:20,color:'white',paddingLeft:8}}>...</Text>
          </TouchableOpacity>          
            <Text style={[GeneralStyles.screenHeaderTextStyle,ChatsStyles.chatsHeaderContent]}>
              {I18n.t('VetSoft')}
            </Text>
            <TouchableOpacity onPress={() => Singout()} style={ChatsStyles.chatsHeaderContent}>
              <Icon name={IconName.Logout} type={IconType.Feather}  size={28} color={Colors.White} />
            </TouchableOpacity>
        </View>
    );
  }

  return (
    <React.Fragment>
      {_renderHeader()}
    <View style={GeneralStyles.containerStyle}>
      <FlatList
        data={chatList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
       <FloatingButton iconSize={20} iconName={IconName.Settings}  OnPress={() => props.navigation.navigate(Screens.Setting) }/> 
      
    </View>
    </React.Fragment>
  );
};

export  {Chats};