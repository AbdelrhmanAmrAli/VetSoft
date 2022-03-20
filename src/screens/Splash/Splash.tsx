import React,{Component} from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Colors,Screens} from '../../enums/enums';
import {GeneralStyles} from '../../styles';
import VetSoft from './../../VetSoft/VetSoft';
import I18n from '../../Resources/Resource';
interface Props { navigation: any }

class Splash extends Component<Props> {
    async componentDidMount(){
        // we used replace function rather than navigate to remove splash screen from navigator stack 
        setTimeout(async () =>{
            const isSuccess = await VetSoft.checkDefaultSetting().then(result => {return result}).catch(() => {return false});
            let isUserExist = false;
            if(isSuccess){
                isUserExist = await VetSoft.checkUserExist();
            }
            else{
                alert(I18n.t('WrongMessage'));
            }
            
            if(isUserExist)
                this.props.navigation.replace(Screens.Chats);
            else 
                this.props.navigation.replace(Screens.Login);
        }, 2000);
    }
    render() {
        return (
            <View style={GeneralStyles.splashStyle}>
                <ActivityIndicator size='large' color={Colors.White}/>
            </View>
        );
    }
}

export {Splash};

   

