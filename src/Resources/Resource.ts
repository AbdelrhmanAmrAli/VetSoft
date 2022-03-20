// /* eslint-disable import/no-namespace */
// import * as GeneralRes_ar from'./General_ar_eg.json';
// import * as GeneralRes_en from './General_en_us.json';
// //----------------------------------------------------------
// import * as MessageRes_ar from './Messages_ar_eg.json';
// import * as MessageRes_en from './Messages_en_us.json';
// //----------------------------------------------------------
// const GeneralRes =  GeneralRes_en;// add case when to select file based on lang
// const MessageRes =  MessageRes_en;// add case when to select file based on lang
// //----------------------------------------------------------
// const GlobalRes = {
//     General : GeneralRes, General_ar : GeneralRes_ar, General_en : GeneralRes_en,
//     Message : MessageRes , Message_ar : MessageRes_ar , Message_en : MessageRes_en 
// }
// //----------------------------------------------------------
// export default GlobalRes;


import I18n from 'react-native-i18n';
import ar from './ar_eg';
import en from './en_us';
import asyncStorageService from '../VetSoft/Services/asyncStorageService'; 
import {KeyAsyncStorage, Lang} from '../enums/enums';

async function getLanguage() {
    let choice = getLangValue();
    
    const result = await asyncStorageService.getItemValue(KeyAsyncStorage.Lang).then(res => {return res;}).catch(() => {return {isSuccess : false ,data : 0 };});
    if(result.isSuccess  && result.data){
        choice = getLangValue(result.data);
    }
    else {
        try { await asyncStorageService.setItemValue(KeyAsyncStorage.Lang, JSON.stringify(Lang.EN)); }
        catch(exception){ 
            alert(exception.Message);
            return false; 
        }
    };
    I18n.locale = choice
    I18n.fallbacks = true
    I18n.translations = { ar,en };
  
    console.log(I18n.currentLocale())
}
function getLangValue(lang : number = 2){
    return lang == Lang.AR ? 'ar-EG' : 'en-US';
}
getLanguage();

export default I18n;

