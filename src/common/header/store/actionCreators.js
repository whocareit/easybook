import * as actionTypes from './actiontypes'
import axios from 'axios';
import { fromJS } from 'immutable';

export const inputFocus = () =>({
    type: actionTypes.INPUT_FOUCS
})
export const inputBlur = () => ({
    type: actionTypes.INPUT_BLUR
})
export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
})
export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
})
export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
})
export const changeIputchange = (data) =>({
    type: actionTypes.CHANGE_ITEM,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})
export const changeItem = () => {
    return(dispatch) => {
        axios.get('https://easy-mock.com/mock/5cd579f4dfec507747473bee/example/api/headerList').then((res)=>{
            const data = res.data;
            dispatch(changeIputchange(data.data))
        }).catch(() =>{
            console.log('error')
        })
    }
}