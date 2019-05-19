import * as actionTypes from './actiontypes'
import { fromJS } from 'immutable';

//新建了一个对象immutable，其数据是不可以更改的
const defaultState = fromJS({
    onFocus: false,
    mouseIn: false, 
    items: [],
    page: 1,
    totalPage: 1
});
export default (state = defaultState,action) => {
    if(action.type === actionTypes.INPUT_FOUCS){
        return state.set('onFocus',true);
    }
    if(action.type === actionTypes.INPUT_BLUR){
        return state.set('onFocus',false);
    }
    if(action.type === actionTypes.CHANGE_ITEM){
        return state.set('items',action.data).set('totalPage',action.totalPage);
    }
    if(action.type === actionTypes.MOUSE_ENTER){
        return state.set('mouseIn',true);
    }
    if(action.type === actionTypes.MOUSE_LEAVE){
        return state.set('mouseIn',false);
    }
    if(action.type === actionTypes.CHANGE_PAGE){
        return state.set('page',action.page);
    }
    return state;
}