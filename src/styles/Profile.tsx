import { StyleSheet } from "react-native";

const profileStyles = StyleSheet.create({
    profileImage: {
      width:200,
      height:200,
      borderRadius:100 ,
      overflow:'hidden',
      alignItems:'center',
      justifyContent:'center',
      
    },
    profileActive: {
      backgroundColor:'#34ffB9',
      position:'absolute',
      bottom:20,
      left:20,
      height:15,
      width:15,
      borderRadius:8,
    },
    profileAdd: {
      backgroundColor:'green',
      position:'absolute',
      bottom:0,
      right:0,
      width:40,
      height:40,
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
  
    },
    profileInfo: {
      alignItems:'center',
      justifyContent:'center',
      marginTop:10,
      marginBottom:10,
    }, 
    profileBox:{
      paddingLeft:20,
      paddingRight:20,
      paddingTop:20,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
    },
    profileBottom:{
      flex:1,
      backgroundColor:'white',
      borderColor:'white',
      bottom:60,
      borderTopStartRadius:60,
      borderTopEndRadius:60,
    },
  });
  export{profileStyles};