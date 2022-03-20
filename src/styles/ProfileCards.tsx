import { StyleSheet, Dimensions } from 'react-native';
import { Colors }  from '../enums/enums';
//-----------------------------------------------
const { width: wWidth } = Dimensions.get("window");

const ProfileCardsStyles = StyleSheet.create({
    cardContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: wWidth - 20,
      marginVertical: 5,
      marginHorizontal: 10,
      paddingBottom: 10,
    },
    avatarContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    avatarBox: {
      width: 60,
      height: 60,
      borderRadius: 40,
      borderColor: Colors.Gray,
      borderWidth : 1
    },
    silentText: {
      color: Colors.Gray,
    },
    avatarContents:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: wWidth - 80,
      paddingBottom: 15,
      paddingTop: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: Colors.Gray
    },
    callContainer :{
        paddingLeft: 10
    },
    call:{ 
        flexDirection: "row",
         alignItems: "center"
    },
    notificationText:{
        width:20,
        height:20,
        alignItems:"center",
        textAlign:"center",
        borderRadius: 50,
        color:Colors.White,
        backgroundColor:Colors.Green
    }
});
//----------------------------------------------
export {ProfileCardsStyles};
//----------------------------------------------

