import * as actionTypes from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: actionTypes.SEARHC_BLUR
});

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
});

export const mouseLeave= () => ({
    type: actionTypes.MOUSE_LEAVE
});

export const pageChange= (page) => ({
    type: actionTypes.PAGE_CHANGE,
    page
});

const changlist = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const getHotList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changlist(data.data));
        }).catch((error) => {
            console.log("error: ", error);
        })
    }
}