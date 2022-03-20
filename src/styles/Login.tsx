import { StyleSheet } from 'react-native';
import { Colors, FontSize }  from '../enums/enums';
// import {ColorThemes, FontSize , FontStyles , FontWeight } from '../enums/enums';
//-----------------------------------------------
const LoginStyles = StyleSheet.create({
    bottomContainerStyle:{
       position : 'absolute',
       justifyContent : 'center',
       alignItems:'center',
       bottom : 10,
       width : '100%',
   },
   buttonContainerStyle:{
    //    height : 50,
       flex:1
   },
   buttonStyle : {
       backgroundColor : Colors.VetSoft,
       alignSelf : 'stretch',
       height : 50
   },
   buttonTitleStyle :{
       marginLeft : 10,
       marginRight : 10
    },
    loginHeaderStyle :{
        padding: 5,
        alignItems : 'center'
    },
    loginHeaderTextStyle : {
        color: Colors.Green,
        fontSize:FontSize.ExtraLarge,
        paddingLeft:15,
        paddingTop:10
    }
});
//----------------------------------------------
export {LoginStyles};
//----------------------------------------------

