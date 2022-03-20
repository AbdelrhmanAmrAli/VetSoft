import  AsyncStorage  from '@react-native-async-storage/async-storage';

class asyncStorageService {
  static  result = {isSuccess : false , data : null, error : '' };
   
  static getItemValue = async (key: string) => {
        try {
            await AsyncStorage.getItem(key)
                    .then(res => res ? JSON.parse(res) : res)
                    // .catch(e => {this.result.isSuccess = false; this.result.error = e.message})
                    .then(data => {this.result.data = data; this.result.isSuccess = true;})
                    .catch(e => {this.result.isSuccess = false; this.result.error = e.message});
        }
        catch(exception) {
            this.result.isSuccess = false; 
            this.result.error = exception;
        }
        return this.result;
   }

   static setItemValue = async (key: string, value : any) => {
        // let result = {isSuccess : false , data : null, error : '' };
        try {
           await AsyncStorage.setItem(key, value)
                        .then(() =>  this.result.isSuccess = true )
                        .catch(e => {
                            this.result.isSuccess = false; 
                            this.result.error = e.message; 
                            return Promise.reject(this.result);
                 });
            
        }
        catch(exception:any) {
            this.result.isSuccess = false; 
            this.result.error = exception.message;
            return Promise.reject(this.result);
        }
        return Promise.resolve(this.result);
   }

   static removeItemValue = async (key: string) => {
        try {
            await AsyncStorage.removeItem(key)
                .then(() => this.result.isSuccess = true)
                .catch(e => {this.result.isSuccess = false; this.result.error = e.message});
        }
        catch(exception:any) {
            this.result.isSuccess = false; 
            this.result.error = exception.message;
        }
        return this.result;
   }
}

export default  asyncStorageService;
