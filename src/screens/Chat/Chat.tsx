import React, { Component } from 'react';
import { Text,View,FlatList, ListRenderItemInfo } from 'react-native';
import { GeneralStyles , ChatStyles, ProfileCardsStyles } from '../../styles';
import { /*Header,*/ Avatar, Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors, FontSize, IconName, IconType } from '../../enums/enums';
export class Chat extends Component<any,any> {  
  constructor(props:any) {
    super(props);
    this.state = {
      data: [
        {id:4, date:"9:20 am", type:'in',  message: "Module : Grand Parent \n Farm : GP01 \n Houses : 1,2,8 \n Mortality is ...%"}, 
        {id:7, date:"9:30 am", type:'out',  message: "Module : Grand Parent \n Farm : GP01 \n Houses : 1,2,8 \n Mortality is ...%"}, 
        {id:8, date:"9:40 am", type:'in',  message: "Module : Grand Parent \n Farm : GP01 \n Houses : 1,2,8 \n Mortality is ...%"},
        {id:9, date:"9:50 am", type:'out',  message: "Module : Grand Parent \n Farm : GP01 \n Houses : 1,2,8 \n Mortality is ...%"}
      ]
    };
  }

  renderDate = (date:[]) => {
    return( <Text style={ChatStyles.time}> {date} </Text>);
  }

  _renderItem = (message:ListRenderItemInfo<any>) => {
    const item = message.item;
    let inMessage = item.type === 'in';
    let itemStyle = inMessage ? ChatStyles.itemIn : ChatStyles.itemOut;
    return (
      <View style={[ChatStyles.item, itemStyle]}>
        {!inMessage && this.renderDate(item.date)}
        <View style={[ChatStyles.balloon]}>
          <Text>{item.message}</Text>
        </View>
        {inMessage && this.renderDate(item.date)}
      </View>
    )
  }
  _renderHeader = () => {
    return (
        <View style={[GeneralStyles.screenHeaderStyle,{ paddingBottom: 10}]}>
          <View style={ProfileCardsStyles.avatarContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.pop()} style={{marginLeft: 10,marginRight: 20}}>
                  <Icon name={IconName.Arrow_Left} type={IconType.Feather}  size={26} color={Colors.White} />
                </TouchableOpacity>
                
                <Avatar size="medium" rounded source={this.props.route.params.item.profilePic} />
                <Text style={[ProfileCardsStyles.callContainer,{color:Colors.White,fontSize:FontSize.Normal}]}>
                  {this.props.route.params.item.name}
                </Text>
          </View>
        </View>
    );
  }

  render() {
    return (
      <React.Fragment>
       {this._renderHeader()}

        <View style={GeneralStyles.containerStyle}> 
          <FlatList 
              style={ChatStyles.list}
              data={this.state.data}
              keyExtractor= {(item) => {return item.id.toString();}}
              renderItem={(message) => this._renderItem(message)}
          />

          {
          /* <View style={styles.footer}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                  placeholder="Write a message..."
                  underlineColorAndroid='transparent'
                  onChangeText={(name_address) => this.setState({name_address})}/>
            </View>

              <TouchableOpacity style={styles.btnSend} >
                <Image source={{uri:"https://img.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  />
              </TouchableOpacity>
          </View> */
          }
        </View>
      </React.Fragment>
    );
  }
}

export default {Chat};