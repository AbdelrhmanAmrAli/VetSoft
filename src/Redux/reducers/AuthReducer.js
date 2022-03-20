import { LOGIN_ATTEMPT , LOGIN_SUCCESS , LOGIN_FAILED } from '../actions/types';
// import GlobalRes from '../../Resources/Resource';

const INITIAL_STATE = { loading : false, user:null , error:'' };

export default(state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOGIN_ATTEMPT: return { ...INITIAL_STATE, loading: true };
        case LOGIN_SUCCESS: return { ...INITIAL_STATE, user: action.payload };
        case LOGIN_FAILED:  return { ...INITIAL_STATE, error: action.error/*GlobalRes.Message.AuthenticationFailed*/ };
        default: return state;
    }
}