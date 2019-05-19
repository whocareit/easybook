import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

//新建了一个对象immutable，其数据是不可以更改的
const defaultState = fromJS({
    login: false
});
export default (state = defaultState,action) => {
    if(action.type === actionTypes.GET_LOGIN_DATA){
        return state.set('login',action.value);
    }
    if(action.type === actionTypes.GET_LOGOUT_DATA){
        return state.set('login',action.value);
    }
    return state;
}

