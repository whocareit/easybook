import axios from 'axios';
import * as actionTypes from './actionTypes';


const changDetailsData = (title,content) =>({
    type: actionTypes.CHANGE_DETAILS_DATA,
    title,
    content
})

export const changeDetail = (id) =>{
    return(dispatch) => {
        axios.get('https://easy-mock.com/mock/5cd579f4dfec507747473bee/example/api/detail?id=' + id).then((res) => {
            const result = res.data.data;
            dispatch(changDetailsData( result.title , result.content ))
        })
    }
}