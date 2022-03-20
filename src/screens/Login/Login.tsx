/* eslint-disable arrow-body-style */
import React, { Component } from 'react';
import { View, Image, Text ,Dimensions, ImageBackground} from 'react-native';
import { Spinner, VtCardItem} from '../components';
import {GeneralStyles,LoginStyles} from '../../styles';
import I18n from '../../Resources/Resource';
import {  Button , Input , Card , Icon } from 'react-native-elements';
import { Colors,IconName, Screens,IconType } from '../../enums/enums';
import  {CheckPasswordConstraints, DisableLoginBtn } from './LoginController';
import VetSoft from '../../VetSoft/VetSoft';
import { connect } from 'react-redux';
import { login } from '../../Redux/actions';
import NetInfo from "@react-native-community/netinfo";
import Toast from 'react-native-toast-message';

class Login extends Component<any, any> {
  NetInfoSubscribtion = null;
  
  constructor(props){
    super(props);
    this.state = {
       username : '', password : '', error : props.error , 
       disabled : true ,isConnected : false, modalVisible : false
    };
  }
  
   setUserNameVal = (username:string) => {
      this.setState({username : username});
      let disabledVal = DisableLoginBtn(this.state.username,this.state.password);
      this.setState({ disabled: disabledVal || !this.state.isConnected });
  }
    
  setPasswordVal = (password:any) =>{
    CheckPasswordConstraints(password);
    this.setState({password:password});
    let disabledVal = DisableLoginBtn(this.state.username,this.state.password);
    this.setState({disabled:disabledVal || !this.state.isConnected});
  }

  async componentDidMount(){
    await this.navigateToNextPage();
    this.NetInfoSubscribtion = NetInfo.addEventListener(this._handleConnectivityChange );
  }
  componentWillUnmount(){this.NetInfoSubscribtion && this.NetInfoSubscribtion();}
  
  _handleConnectivityChange = (state) => {
     this.setState({ isConnected : state.isConnected});
     this.setState({ disabled : this.state.disabled || !state.isConnected});
     if(state.isConnected)
       Toast.hide();
     else {
        Toast.show({
        position: 'bottom',
        type: 'error',
        text1: I18n.t('InternetConnection'),
        text2: I18n.t('OfflineMessage'),
        autoHide: false
      });
    }
  };

  // componentDidUpdate(){
  //   if(this.props.user) 
  //      this.navigateToNextPage();
  // }

  // static getDerivedStateFromProps(nextProps){
  //   alert( 'Next loading '+ nextProps.loading + ' error ' + nextProps.error + ' user ' + nextProps.user ); 
  //   return { error : nextProps.error };
  // }

  async navigateToNextPage(){ 
      const IsNavigate = true;
      //console.log('Is Naviagate ' + IsNavigate);
      if(IsNavigate)
        this.props.navigation.replace(Screens.Chats);
  }

  async _onLoginPressed () {
    const { username, password } = this.state;
      await this.props.login({ username, password });
      this.navigateToNextPage();
  }

  _renderBtn () { 
    if(this.props.loading)
       return <Spinner />;

    return (
      <Button  title={I18n.t('SignIn')}
              buttonStyle={LoginStyles.buttonStyle}
              titleStyle={LoginStyles.buttonTitleStyle} 
              disabled={this.state.disabled}
              // eslint-disable-next-line no-invalid-this
              onPress={this._onLoginPressed.bind(this)}
              icon={<Icon name={IconName.Login} type={IconType.Feather} size={26} color={this.state.disabled? Colors.Gray : Colors.White} />}
      />
    );
  }
    render(){
      return (
        <View style={GeneralStyles.containerStyle}>
          {/* <View style={GeneralStyles.screenHeaderStyle}>
            <Text style={GeneralStyles.screenHeaderTextStyle}>{GlobalRes.General.SignIn}</Text>
          </View> */}
          <ImageBackground source={require('../../../assets/BackGround.jpg')} 
                           style={{height:Dimensions.get('window').height/4}} 
          >
          {/* <View style={GeneralStyles.imageContainerStyle}>
               <Image style={GeneralStyles.roundImage} source={require('../../../assets/icon.png')} />
          </View> */}

          </ImageBackground>

          <View style={GeneralStyles.bottomView}>
            <View style={LoginStyles.loginHeaderStyle}>
              <Text style={LoginStyles.loginHeaderTextStyle}>
                {I18n.t('SignIn')}
              </Text>
              
              <Card>
                <VtCardItem>
                  <Input  placeholder={I18n.t('UserNamePlaceholderMessage')} 
                          value={this.state.username}  
                          leftIcon={<Icon name={IconName.User} type={IconType.FontAwesome} size={24} color={Colors.Lightgray} />}
                          onChangeText ={ (username) => this.setUserNameVal(username)} 
                  />   
                </VtCardItem>
            
                <VtCardItem>
                  <Input  placeholder={I18n.t('PasswordPlaceholderMesssage')}  
                          secureTextEntry
                          value={this.state.password}  
                          leftIcon={<Icon name={IconName.Lock}type={IconType.FontAwesome} size={24} color={Colors.Lightgray} />} 
                          onChangeText ={ (password) => this.setPasswordVal(password)} 
                  />
                </VtCardItem>
    
                <VtCardItem>
                  <View style={LoginStyles.buttonContainerStyle}>
                    {this._renderBtn()}
                  </View>
                </VtCardItem>
              </Card>
                <View style={LoginStyles.loginHeaderStyle}>
                  <Text style={GeneralStyles.errorStyle}>{this.props.error}</Text>
                </View>
            </View>

           
          </View>
          <View  style={LoginStyles.bottomContainerStyle}>
             <View style={GeneralStyles.imageContainerStyle}>
               <Image source={require('../../../assets/logo.gif')} />
             </View>

            <Text style={GeneralStyles.boldTextStyle} >{VetSoft.GetCopyRight()}</Text>
          </View>
        </View>
      );
  }
}

const mapStateToProps = (state: { auth: { error: any; user: any; loading: any; }; }) => {
  return {
    error : state.auth.error,user : state.auth.user,loading : state.auth.loading
  }
};

export default connect(mapStateToProps, { login })(Login);
//export  {Login};
