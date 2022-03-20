import React from "react";
import { View, Text } from "react-native";
// import { call } from "react-native-reanimated";
import { chatListProps } from "../../services/interface";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon, Avatar } from 'react-native-elements';
import { ColorThemes, IconType, IconName } from "../../enums/enums";
import {GeneralStyles,ProfileCardsStyles} from '../../styles';

interface ProfileCardsProps { 
   item: chatListProps;call?: boolean;// pageName? : string ; navigation:any 
}

// const RedirectTo = (navigation) => {
//     navigation.navigate('Chat');
// }

const ProfileCards = ({ item, call }: ProfileCardsProps) => {
  return (
    <View style={ProfileCardsStyles.cardContainer}>
      <View style={ProfileCardsStyles.avatarContainer}>
        {/* <View style={styles.avatarBox}> </View> */}
        <Avatar rounded size="medium" source={ item.profilePic } />

        <View style={ProfileCardsStyles.avatarContents} >
          <View style={ProfileCardsStyles.callContainer}>
            <Text style={GeneralStyles.boldTextStyle}>{item.name}</Text>
            <View style={ProfileCardsStyles.call}>
              {call ? (
                <Icon
                  type= {IconType.Material}
                  name={IconName.Call_Made}
                  size={15}
                  color={ColorThemes.SECONDARY_LIGHT}
                />
              ) : null}
              <Text style={ProfileCardsStyles.silentText}>{item.lastMessage}</Text>
            </View>
          </View>
          <View>
            {call ? (
              <Icon name={IconName.Call_Sharp} 
                    type={IconType.Ionicon} 
                    size={26} 
                    color={ColorThemes.PRIMARY} 
              />
            ) : (
              <React.Fragment>
                <Text style={ProfileCardsStyles.notificationText}>3</Text>
                <Text style={ProfileCardsStyles.silentText}>{item.lastSeen}</Text>
              </React.Fragment>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export {ProfileCards};
