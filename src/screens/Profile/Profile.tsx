import React from 'react';
import { Image,ScrollView, Text,TouchableOpacity,ImageBackground,Dimensions,View } from 'react-native';
import { Icon } from 'react-native-elements';
import {profileStyles} from '../../styles';


const ProfileBox = (probs) => {
  return (
    <View  style={profileStyles.profileBox}>
      <Text>{probs.info}</Text>
      <Text>{probs.info2}</Text>  
    </View>
  )
}



const Profile = () => {
  return (
  <ScrollView>
    <ImageBackground source={require('../../../assets/BackGround.jpg')} 
    style={{justifyContent:'center',height:Dimensions.get('window').height/1.5}}>
      <View style={{alignSelf:'center'}}>
      <TouchableOpacity style={profileStyles.profileImage}>
        <Image source={require('../../../assets/images2.jpg')}/>
      </TouchableOpacity>
      <View style={profileStyles.profileActive}></View>
      <TouchableOpacity style={profileStyles.profileAdd}>
        <Icon type='feather' name='settings' color='white'/>
      </TouchableOpacity>
    </View>
    <View style={profileStyles.profileInfo}>
      <Text style={{fontWeight:"200",fontSize:30,fontFamily:'HelveticaNeue',color:'white'}}>Name</Text>
      <Text style={{fontSize:14,color:'#AEB5BC',fontFamily:'HelveticaNeue'}}>Job</Text>
     </View>
    </ImageBackground>
    <View style={profileStyles.profileBottom}>
      <ProfileBox info='Username' info2='anything@gmail.com' />
      <ProfileBox info='Phone Number' info2='01023083923'/>
      <ProfileBox info='Department' info2='IT'/>
    </View>
  </ScrollView>    
  );
};

//-----------------------------------------
export  {Profile};
//-----------------------------------------
