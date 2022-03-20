/* eslint-disable import/no-unresolved */
/* eslint-disable import/named */
import React from 'react';
import {  View , StatusBar } from 'react-native';
import  {GeneralStyles} from './src/styles/General';
// import  Login  from './src/screens/Login/Login';
import { ColorThemes } from './src/enums/enums';
import Routes from './src/routes/Routes';
import { Provider }  from 'react-redux';
import store from './src/Redux/store/store';
import I18n from './src/Resources/Resource'; // important to ensure that we will not find undefineed resources
//-----------------------------------------
export default function App() {
  return (
      <Provider store={store}>
        <View style={GeneralStyles.containerStyle}>
          <StatusBar animated backgroundColor={ColorThemes.PRIMARY}/>
          <Routes />
        </View>
      </Provider>
  );
}
//-----------------------------------------
