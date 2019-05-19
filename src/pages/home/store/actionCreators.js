import axios from 'axios';
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const changeHomeDatalist = (result) =>({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: fromJS(result.topicList),
    itemList: fromJS(result.itemList),
    reList: fromJS(result.reList)
})

const addMorehomelist = (list,nextPage) => ({
    type: actionTypes.ADD_MORE_LIST,
    list: fromJS(list),
    nextPage
})

export const getHomeInfo = () => {
    return(dispatch) => {
        axios.get('https://easy-mock.com/mock/5cd579f4dfec507747473bee/example/api/pagesList')
        .then((res) => {
            const result = res.data.data;
            dispatch(changeHomeDatalist(result));
        })
        .catch(() => {
            alert('error');
        })
    }
}

export const addMorelist = (page) => {
    return(dispatch) => {
        axios.get('https://easy-mock.com/mock/5cd579f4dfec507747473bee/example/api/more?page=' + page)
        .then((res) => {
            const result = res.data.data;
            dispatch(addMorehomelist(result,page + 1));
        }).catch(() => {
            alert('error');
        })
    }
}

export const changeTopScroll = (show) => ({
    type: actionTypes.CHANGE_SCROLL_TOP,
    show
})