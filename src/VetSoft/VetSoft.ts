import I18n from "../Resources/Resource";
import { KeyAsyncStorage, Lang } from '../enums/enums';
import asyncStorageService from './Services/asyncStorageService';

class VetSoft {
    static currentYear = new Date().getFullYear().toString();

    static isEmpty = (obj: any) => {
        //return (!str || str.length == 0 );
        // console.log('obj '  + obj + ' Object.keys(obj).length ' +  Object.keys(obj).length);
        return (!obj || Object.keys(obj).length === 0)
    }
    static GetCopyRight = () => {
        return (I18n.t('CopyRight')).toString().replace('{0}',VetSoft.currentYear);
    } 
    
    static checkUserExist = async () => {
        return await asyncStorageService
                        .getItemValue(KeyAsyncStorage.User)
                        .then((res) => {
                            if(!VetSoft.isEmpty(res.data))
                                 return true;
                            else return false;
                        })
                        .catch((error) => {console.log(error.message); return false;}); 
        
        //  alert(res.isSuccess + ' ' + res.data + ' ' + res.error);
        // if(res.isSuccess)
        // {
        //     if (!VetSoft.isEmpty(res.data)){
        //         res.isSuccess = true;
        //     }
        //     res.isSuccess = false;
        //     //res.error = GlobalRes.Message.EmptyData;
        // }
        
        // return res.isSuccess;
    }

    static checkDefaultSetting = async() => {
        // this method checks the setting in async storage if exist leave it else then it will set default settings value

        // check lang setting : 
        let result =  await asyncStorageService.getItemValue(KeyAsyncStorage.Lang).then(res => {return res}).catch(() => {return { isSuccess: false , data : 0}}); 
        if(!result.isSuccess || VetSoft.isEmpty(result.data)){
            try{ await VetSoft.setDefaultLangSetting(result.data); }
            catch { return false; }
        }
        return true;
    }
    static async setDefaultLangSetting(lang : number){
        if(lang){ //because VetSoft.isEmpty always will return true if the sent parameter is number.
            try { await asyncStorageService.setItemValue(KeyAsyncStorage.Lang, JSON.stringify(Lang.EN)); }
            catch(exception){ 
                alert(exception.message);
                return false; 
            }
        }
        return true;
    }
}

export default VetSoft;


