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
    FETCH_LIABILITIES
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
    const dashboard = await server.get(`/dashboard/${userId}`);
    return dispatch({
        type: FETCH_ASSETS,
        payload: dashboard.data.assets
    });
}

export const addIncomeItem = (id, name, amount, userId) => async dispatch =>{
    const newListItem = await server.post(`/dashboard/${userId}`, {
        "label": name,
        "amount": amount,
        "listType": "ASSETS"
    });

    return dispatch({
        type: ADD_INCOME_ITEM,
        payload: newListItem
    });
}

export const removeIncomeItem = (id) => async dispatch => {
    return {
        type: REMOVE_INCOME_ITEM,
        payload: id
    }
}

export const addExpenseItem = (id, name, amount, userId) => async dispatch => {
    await server.post(`/dashboard/${userId}`, {
        "label": name,
        "amount": amount,
        "listType": "LIABILITIES"
    })
    return dispatch({
        type: ADD_EXPENSE_ITEM,
        payload: {
            id, name, amount
        }
    });
}

export const removeExpensesItem = (id, userId) => async dispatch => {
    await server.delete(`/dashboard/${userId}/${id}`);
    return {
        type: REMOVE_EXPENSE_ITEM,
        payload: id
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