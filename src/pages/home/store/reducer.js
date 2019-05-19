import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

//新建了一个对象immutable，其数据是不可以更改的
const defaultState = fromJS({
    topicList : [],
    itemList : [],
    reList : [],
    itemPage : 1,
    showScroll : false
});
export default (state = defaultState,action) => {
    if(action.type === actionTypes.CHANGE_HOME_DATA){
        return state.set('topicList',action.topicList).set('itemList',action.itemList).set('reList',action.reList);
    }
    if(action.type === actionTypes.ADD_MORE_LIST){
        return state.set('itemList',state.get('itemList').concat(action.list)).set('itemPage',action.nextPage);
    }
    if(action.type === actionTypes.CHANGE_SCROLL_TOP){
        return state.set('showScroll',action.show)
    }
    return state;
}