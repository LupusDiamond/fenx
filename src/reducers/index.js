import {combineReducers} from "redux";
import authReducer from "./authReducer";
import vaultsReducer from './vaults/index';

import {
    ADD_INCOME,
    ADD_EXPENSE,
    ADD_INCOME_ITEM,
    REMOVE_INCOME_ITEM,
    ADD_EXPENSE_ITEM,
    REMOVE_EXPENSE_ITEM,
    HIDE_SIDEBAR,
    SHOW_SIDEBAR,
    FETCH_ASSETS,
    FETCH_LIABILITIES,
    SET_INCOME,
    SET_EXPENSE
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
            return oldList.filter(item => item._id != action.payload);
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
            return oldList.filter(item => item._id != action.payload);
        default:
            return oldList;
    }
}

const sideBarReducer = (show = false, action) => {
    switch (action.type) {
        case HIDE_SIDEBAR:
            show = false;
            return show;
        case SHOW_SIDEBAR:
            show = true;
            return show;
        default:
            return show;
    }
}

export default combineReducers({
    income: incomeReducer,
    expenses: expenseReducer,
    incomeList: incomeListReducer,
    expensesList: expenseListReducer,
    auth: authReducer,
    showSidebar: sideBarReducer,
    vaultsState: vaultsReducer
})