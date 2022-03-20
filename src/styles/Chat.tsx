import { StyleSheet } from 'react-native';
import { Colors, FontSize}  from '../enums/enums';
//-----------------------------------------------
const ChatStyles = StyleSheet.create({
    list:{ paddingHorizontal: 17 },
    footer:{
      flexDirection: 'row',
      height:60,
      backgroundColor: Colors.White,
      paddingHorizontal:10,
      padding:5,
      
    },
    btnSend:{
      backgroundColor:Colors.Darkgreen,
      width:40,
      height:40,
      borderRadius:360,
      alignItems:'center',
      justifyContent:'center',
    },
    iconSend:{ width:20,height:20,alignSelf:'center' },
    inputContainer: {
      borderBottomColor: Colors.Darkgreen,
      backgroundColor: Colors.White,
      borderRadius:30,
      borderBottomWidth: 1,
      height:40,
      flexDirection: 'row',
      alignItems:'center',
      flex:1,
      marginRight:10,
    },
    inputs: { height:40,marginLeft:16,borderBottomColor: Colors.Darkgreen,flex:1 },
    balloon: { maxWidth: 250, padding: 15, borderRadius: 20 },
    itemIn: { alignSelf: 'flex-start' },
    itemOut: { alignSelf: 'flex-end',backgroundColor: Colors.Lightgreen },
    time: {alignSelf: 'flex-end', margin: 15,fontSize: FontSize.Small,color: Colors.Black },
    item: {
      marginVertical: 14,
      flex: 1,
      flexDirection: 'row',
      backgroundColor: Colors.ExtraLightGreen,//Colors.EEEEEE,
      borderRadius:30,
      padding:5
    }
});
//----------------------------------------------
export {ChatStyles};
//----------------------------------------------

