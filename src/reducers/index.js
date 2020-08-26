import {combineReducers} from "redux";
import authReducer from "./authReducer";
import vaultsReducer from './vaults/index';
import vaultDetailsReducer from './vaults/details';
import {sidebarSlice, vaultSlice} from '../features';

import {
    ADD_INCOME,
    ADD_EXPENSE,
    ADD_INCOME_ITEM,
    REMOVE_INCOME_ITEM,
    ADD_EXPENSE_ITEM,
    REMOVE_EXPENSE_ITEM,
    FETCH_ASSETS,
    FETCH_LIABILITIES,
    SET_INCOME,
    SET_EXPENSE,
    SET_PAGE
} from "../actions/types";



const incomeReducer = (amount = 0, action) => {
    switch (action.type) {
        case SET_INCOME:
            return action.payload;
        case ADD_INCOME:
            return amount + action.payload;
        default:
            return amount;
    }
}

const expenseReducer = (amount = 0, action) => {
    switch (action.type) {
        case SET_EXPENSE:
            return action.payload;
        case ADD_EXPENSE:
            return amount + action.payload;
        default:
            return amount;
    }
}

const incomeListReducer = (oldList = [], action) => {
    switch (action.type) {
        case FETCH_ASSETS: 
            return action.payload;
        case ADD_INCOME_ITEM:
            return [...oldList, action.payload];
        case REMOVE_INCOME_ITEM:
            return oldList.filter(item => item._id !== action.payload);
        default:
            return oldList;
    }
}

const expenseListReducer = (oldList = [], action) => {
    switch (action.type) {
        case FETCH_LIABILITIES:
            return action.payload;
        case ADD_EXPENSE_ITEM:
            return [...oldList, action.payload];
        case REMOVE_EXPENSE_ITEM:
            return oldList.filter(item => item._id !== action.payload);
        default:
            return oldList;
    }
}

const pageReducer = (oldPage = "/", action) => {
    switch (action.type) {
        case SET_PAGE:
            return action.payload;
        default:
            return oldPage;
    }
}

export default combineReducers({
    income: incomeReducer,
    expenses: expenseReducer,
    incomeList: incomeListReducer,
    expensesList: expenseListReducer,
    auth: authReducer,
    vaultsState: vaultsReducer,
    page: pageReducer,
    vaultDetails: vaultDetailsReducer,
    sidebar: sidebarSlice.reducer,
    vaults: vaultSlice.reducer
})