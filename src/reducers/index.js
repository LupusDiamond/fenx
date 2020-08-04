import {combineReducers} from "redux";
import authReducer from "./authReducer";

import {
    ADD_INCOME,
    ADD_EXPENSE,
    ADD_INCOME_ITEM,
    REMOVE_INCOME_ITEM,
    ADD_EXPENSE_ITEM,
    REMOVE_EXPENSE_ITEM,
    HIDE_SIDEBAR,
    SHOW_SIDEBAR
} from "../actions/types";

const incomeReducer = (amount = 0, action) => {
    switch (action.type) {
        case ADD_INCOME:
            return amount + action.payload;
        default:
            return amount;
    }
}

const expenseReducer = (amount = 0, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            return amount + action.payload;
        default:
            return amount;
    }
}

const incomeListReducer = (oldList = [], action) => {
    switch (action.type) {
        case ADD_INCOME_ITEM:
            return [...oldList, action.payload];
        case REMOVE_INCOME_ITEM:
            return oldList.filter(item => item.id != action.payload);
        default:
            return oldList;
    }
}

const expenseListReducer = (oldList = [], action) => {
    switch (action.type) {
        case ADD_EXPENSE_ITEM:
            return [...oldList, action.payload];
        case REMOVE_EXPENSE_ITEM:
            return oldList.filter(item => item.id != action.payload);
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
    showSidebar: sideBarReducer
})