import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS ({
    title: '',
    content: ''
});

export default (state = defaultState,action) => {
    if(action.type === actionTypes.CHANGE_DETAILS_DATA){
        return state.set('title',action.title).set('content',action.content)
    }
    return state;
}