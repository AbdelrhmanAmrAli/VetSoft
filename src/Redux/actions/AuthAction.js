/* eslint-disable prettier/prettier */
import {LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILED} from './types';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {Validation} from '../../screens/Login/LoginController';
import I18n from '../../Resources/Resource';
import VetSoft from '../../VetSoft/VetSoft';
import {KeyAsyncStorage} from '../../enums/enums';
import Api from '../../VetSoft/Services/api';
import asyncStorageService from '../../VetSoft/Services/asyncStorageService';

const finishLogin = async (dispatch,user) => {
        await asyncStorageService.setItemValue(KeyAsyncStorage.User,JSON.stringify(user))
                                 .then(() => dispatch({ type:LOGIN_SUCCESS,payload: user }))
                                 .catch((error)=> dispatch({type:LOGIN_FAILED,error: error.message }));
};

export const login =  ({ username , password }) => {
    // debugger
    
    let result = Validation(username , password);
     
    return async (dispatch) => {
                dispatch({type:LOGIN_ATTEMPT});
                if (result.isSuccess){
                    await Api.Login(username , password)
                    .then((res) => {
                        //console.log('response: '+res.data);
                         finishLogin(dispatch,res.data); } )
                    .catch((error) => { 
                            //console.log('error ' + error.message);
                            if(VetSoft.isEmpty(error.message))
                                error = I18n.t('AuthenticationFailed');
                            dispatch({type:LOGIN_FAILED,error: error.message });
                    }); 
                    // let user = {UserID: 1, UserName : "Abdelrahman",Password : "123456"};
                    // finishLogin(dispatch,user);
                }
                else {
                    dispatch({type:LOGIN_FAILED,error: result.error });
                }
            }
};
