import {
    ADD_INCOME,
    ADD_EXPENSE,
    ADD_INCOME_ITEM,
    ADD_EXPENSE_ITEM,
    REMOVE_EXPENSE_ITEM,
    REMOVE_INCOME_ITEM,
    SIGN_IN,
    SIGN_OUT,
    HIDE_SIDEBAR,
    SHOW_SIDEBAR,
    FETCH_ASSETS,
    FETCH_LIABILITIES,
    SET_EXPENSE,
    SET_INCOME
} from "./types";

import server from '../apis/server';


export const addIncome = (amount) => {
    return {
        type: ADD_INCOME,
        payload: amount
    }
}

export const addExpense = (amount) => {
    return {
        type: ADD_EXPENSE,
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

export const fetchLiablities = (userId) => async dispatch => {
    const dashboard = await server.get(`/dashboard/${userId}`, {
        "type": "LIABILITIES"
    });
    return dispatch({
        type: FETCH_LIABILITIES,
        payload: dashboard.data.liabilities
    })
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

export const setIncome = amount => {
    return {
        type: SET_INCOME,
        payload: amount
    }
}

export const setExpense = amount => {
    return {
        type: SET_EXPENSE,
        payload: amount
    }
}


export const signIn = (userId, username, profilePicture) => async dispatch => {
    server.post("/users/new", {
        username, userId
    });
    return dispatch({
        type: SIGN_IN,
        payload: {
            userId, username, profilePicture
        }
    });
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const hideSidebar = () => {
    return {
        type: HIDE_SIDEBAR
    }
}

export const showSidebar = () => {
    return {
        type: SHOW_SIDEBAR
    }
}