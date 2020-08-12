import {
    ADD_EXPENSE,
    ADD_EXPENSE_ITEM,
    SET_EXPENSE,
    REMOVE_EXPENSE_ITEM,
    FETCH_LIABILITIES
} from '../types';

import server from '../../apis/server';

export const addExpense = (amount) => {
    return {
        type: ADD_EXPENSE,
        payload: amount
    }
}

export const fetchLiablities = (userId) => async dispatch => {
    const dashboard = await server.get(`/dashboard/${userId}`, {
        "type": "LIABILITIES"
    });
    return dispatch({
        type: FETCH_LIABILITIES,
        payload: dashboard.data.liabilities
    })
}

export const addExpenseItem = (id, name, amount, userId) => async dispatch => {
    server.post(`/dashboard/${userId}`, {
        "label": name,
        "amount": amount,
        "listType": "LIABILITIES"
    });

    return dispatch({
        type: ADD_EXPENSE_ITEM,
        payload: {
            _id: id,
            label: name,
            amount: amount,
            listType: "LIABILITIES"
        }
    });
}

export const removeExpensesItem = (userId, postId) => async dispatch => {
    await server.delete(`/dashboard/${userId}/${postId}/LIABILITIES`, {
        "type": "LIABILITIES"
    });
    return dispatch({
        type: REMOVE_EXPENSE_ITEM,
        payload: postId
    })
}



export const setExpense = amount => {
    return {
        type: SET_EXPENSE,
        payload: amount
    }
}