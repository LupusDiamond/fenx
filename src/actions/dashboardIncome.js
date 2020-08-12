import {
    SET_INCOME,
    ADD_INCOME,
    ADD_INCOME_ITEM,
    REMOVE_INCOME_ITEM,
    FETCH_ASSETS
} from './types';

import server from '../apis/server';

export const setIncome = amount => {
    return {
        type: SET_INCOME,
        payload: amount
    }
}

export const addIncome = (amount) => {
    return {
        type: ADD_INCOME,
        payload: amount
    }
}

export const fetchAssets = (userId) => async dispatch => {
    const dashboard = await server.get(`/dashboard/${userId}`, {
        "type": "ASSETS"
    });
    return dispatch({
        type: FETCH_ASSETS,
        payload: dashboard.data.assets
    });
}

export const addIncomeItem = (id, name, amount, userId) => async dispatch =>{
    server.post(`/dashboard/${userId}`, {
        "label": name,
        "amount": amount,
        "listType": "ASSETS"
    });

    return dispatch({
        type: ADD_INCOME_ITEM,
        payload: {
            _id: id,
            label: name,
            amount: amount,
            listType: "ASSETS"
        }
    });
}

export const removeIncomeItem = (userId, postId) => async dispatch => {
    await server.delete(`/dashboard/${userId}/${postId}/ASSETS`);
    return dispatch({
        type: REMOVE_INCOME_ITEM,
        payload: postId
    })
}