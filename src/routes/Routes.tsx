import React from 'react';
import {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack';
import { Splash, Chats,Chat, Setting , Profile} from '../screens';
import  Login from '../screens/Login/Login';
import I18n from '../Resources/Resource';
import { GeneralStyles } from '../styles';
import { NavigationContainer  } from '@react-navigation/native';
import { Colors, Screens } from '../enums/enums';
import Toast, { BaseToast } from 'react-native-toast-message';
const Stack = createStackNavigator();

const Option = (label:string,showBackButton:boolean = true,options?:StackNavigationOptions) => {
    if(showBackButton){
        options = {
            ...options,
            title : label, headerTitleAlign : 'center',
            headerStyle:GeneralStyles.screenHeaderStyle, 
            headerTitleStyle:GeneralStyles.screenHeaderTextStyle,
            headerTintColor : Colors.White
        };
    }
    else{
        options = {
            ...options,
            title : label, headerTitleAlign : 'center', headerStyle:GeneralStyles.screenHeaderStyle, 
            headerTitleStyle:GeneralStyles.screenHeaderTextStyle, headerLeft : ()=> null
        };
    }
        return (options);
    };

const toastConfig = {
  error: (props) => (
    <BaseToast
      {...props}
      style={GeneralStyles.toastContainerStyle}
      text1Style = {GeneralStyles.toastText1Style}
      text2Style = {GeneralStyles.toastText2Style}
    />
  ),
};

const Routes = () => {
    return (
       <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={Screens.Splash} component={Splash}  options={{headerShown:false}} />
            <Stack.Screen name={Screens.Login}  component={Login}   options={{headerShown:false}} />
            <Stack.Screen name={Screens.Chats}  component={Chats}   options={{headerShown:false}} />{/*Option(I18n.t('VetSoft'),false)*/}
            <Stack.Screen name={Screens.Chat}   component={Chat}    options={{headerShown:false}} />
            <Stack.Screen name={Screens.Setting} component={Setting} options={Option(I18n.t('Settings'))}/>
            <Stack.Screen name={Screens.Profile} component={Profile}  options={Option(I18n.t('Profile'))}/>
          </Stack.Navigator>
          <Toast ref={(ref) => Toast.setRef(ref)} config={toastConfig}/>
      </NavigationContainer>
    );
};

export default Routes;
