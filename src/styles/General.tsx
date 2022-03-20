import { StyleSheet } from 'react-native';
import {ColorThemes, FontSize , FontStyles , FontWeight, Colors, FontFamily } from '../enums/enums';
//-----------------------------------------------
const GeneralStyles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: Colors.White,
        //alignItems: 'center',
        // justifyContent: 'center'
      },
    inputContainerStyle : {
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        height : 50
    },
    imageContainerStyle : {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical : 40
    },
    roundImage:{
         borderRadius : 40
    },
    headerStyle : {
        backgroundColor : ColorThemes.PRIMARY,
        fontSize : FontSize.Medium,
        fontWeight : FontWeight.Bold,
        fontStyle : FontStyles.Normal
    },
    screenHeaderStyle:{
        backgroundColor : ColorThemes.PRIMARY,
        // alignItems:'center',
        borderColor: Colors.Green,
        borderBottomWidth :1
    },
    screenHeaderTextStyle:{
        fontSize : FontSize.Large,
        fontWeight : FontWeight.Bold,
        fontStyle : FontStyles.Normal,
        fontFamily : FontFamily.Monospace,
        color:Colors.White
    },
    textStyle : {
        fontSize : FontSize.Normal,
        fontWeight : FontWeight.Normal,
        fontStyle : FontStyles.Normal
    },
    textButtonStyle : {
        fontSize : FontSize.Normal,
        fontWeight : FontWeight.Bold,
        fontStyle : FontStyles.Normal,
        alignSelf : 'center',
        color: Colors.White,
        paddingTop: 10,
        paddingBottom: 10
    },
    labelStyle : {
        fontSize : FontSize.Normal,
        fontWeight : FontWeight.Bold,
        fontStyle : FontStyles.Normal,
        paddingLeft:20,
        flex : 1
    },
    cardStyle :{
        marginLeft: 10,
        marginRight: 10,
        marginTop : 10,
        borderWidth:1,
        borderRadius : 2,
        borderColor : Colors.VetSoft,
        borderBottomWidth : 0,
        shadowColor : Colors.Black,
        shadowOpacity : 0.1
    },
    cardItemStyle : {
        padding : 5,
        borderColor: Colors.VetSoft,
        borderBottomWidth : 1,
        backgroundColor : Colors.White,
        justifyContent : 'flex-start',
        flexDirection : 'row'
    },
    buttonStyle : {
        marginRight : 5,
        marginLeft:5,
        borderColor:Colors.ZeroZero7aff,
        borderWidth: 1,
        borderRadius:5,
        backgroundColor: Colors.VetSoft,
        // alignSelf : 'stretch',
        flex : 1
       // width: "100%"
    },
    inputStyle: {
        fontSize : FontSize.Normal,
        fontWeight : FontWeight.Normal,
        fontStyle : FontStyles.Normal,
        color:Colors.Black,
        paddingRight : 5,
        paddingLeft : 5,
        flex: 2
      },
      boldTextStyle : {
        fontSize : FontSize.Normal,
        fontWeight : FontWeight.Bold,
        fontStyle : FontStyles.Normal,
        color: Colors.Black
      },
      item: {
          paddingVertical: 17,
          paddingHorizontal: 4,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
      },
      textItem: {
          flex: 1,
          fontSize: FontSize.Normal
      },
      splashStyle : {
          flex: 1,
          alignItems : 'center',
          justifyContent:'center',
          backgroundColor : Colors.VetSoft
      },
      errorStyle : {
        fontSize: FontSize.Normal,
        fontWeight : FontWeight.Bold,
        color: Colors.Red
      },
      spinnerStyle : {
          flex : 1,
          justifyContent : 'center',
          alignItems : 'center'
      },
      toastContainerStyle:{
        backgroundColor: Colors.Lightgray, borderLeftColor: Colors.Red, alignItems: 'center'
      },
      toastText1Style : {
        margin : 5, 
        fontSize : FontSize.Normal
      },
      toastText2Style : {
        margin : 5, color:Colors.Black, fontSize : FontSize.Normal
      },
      bottomView:{
        flex:1.5,
        backgroundColor:Colors.White,
        bottom:50,
        borderTopStartRadius:60,
        borderTopEndRadius:60,
        },
        boxContainer : {
            color: Colors.Black,
            borderWidth:15,
            borderColor: Colors.White,
            fontSize: FontSize.Normal,
            paddingLeft:10
        },
    seperatorSection:{
        height:0.5,
        backgroundColor:Colors.Gray
      }
});
//----------------------------------------------
export {GeneralStyles};
//----------------------------------------------

