/* eslint-disable no-unused-vars */
//import { PasswordConstraints } from '../../enums/enums';
import I18n from '../../Resources/Resource';
import VetSoft from '../../VetSoft/VetSoft';
import { format } from 'react-string-format';


export const CheckPasswordConstraints = (password:string) =>{
    let isVal = false; 
    if(password /*&& password.length >= PasswordConstraints.MinLength*/)
    isVal = true;
    return isVal;
}

export const DisableLoginBtn = (username: string, password:string) => {
    return (VetSoft.isEmpty(username)|| VetSoft.isEmpty(password) );
}

export const Validation = (username: string, password:string) => {
    let result = {isSuccess : true, error : ''};
    let isVal = true;
    let errorMsg = '';
    isVal = !VetSoft.isEmpty(username);
    
    if(isVal)
       isVal = !VetSoft.isEmpty(password);
    else
      errorMsg = format(I18n.t('Required'),I18n.t('UserName'));

    if(isVal){
        CheckPasswordConstraints(password);
    }
    else {
        errorMsg = format(I18n.t('Required'),I18n.t('Password'));
    }
    result = { isSuccess: isVal, error: errorMsg}
    return result;
}

