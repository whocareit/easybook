import axios from 'axios';
import * as actionTypes from './actionTypes';

const login = () =>({
    type: actionTypes.GET_LOGIN_DATA,
    value: true
})

export const logoutL = () => ({
    type: actionTypes.GET_LOGOUT_DATA,
    value: false
})

export const getLogin = (account,password) =>{
   return(dispatch) => {
        axios.get('https://easy-mock.com/mock/5cd579f4dfec507747473bee/example/api/login?account=' + account +'&password=' + password).then((res) =>{
            const result = res.data.data;
            if(result){
                dispatch(login());
            }else{
                alert('登录失败');
            }
        })
   }
}