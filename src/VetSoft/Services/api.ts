import axios from 'axios';
import { RequestStatus } from '../../enums/enums';
// import I18n from '../../Resources/Resource';
class Api {
    static Login = async (username : string, password: string) => {
            //setTimeout(async() => {   
               // try{
               return await axios.post('http://192.168.1.6:5000/User/Login',{ UserName:username, Password:password })
                          .then(
                             res => {
                                if(res.status == RequestStatus.Ok){
                                 //   console.log('is success: ' + res.data.isSuccess);
                                 //   console.log('data: ' + res.data.data);
                                 //   console.log('error: ' + res.data.error);
                                 //   console.log('response: ' + JSON.stringify(res.data));
                                   if(res.data.isSuccess)
                                        return Promise.resolve(res.data);
                                   else 
                                       return Promise.reject({message : res.data.error});
                                }
                                else{
                                   return  Promise.reject({ message : res.statusText });
                                }
                           })
                           .catch((e) =>{ return  Promise.reject(e);} );
                           
                     
                     // result = result.data;
                     // if(result.isSuccess){
                     //    return Promise.resolve(result);
                     // }
                     // else{
                     //    return Promise.reject(result.error);
                     // }
               // }
               // catch(exception){
               //    return Promise.reject(exception.message);
               // }
           // }, 300000);
           // return Promise.reject(I18n.t('LongTimeMessage'))
    }
}

export default Api;