import {combineReducers} from 'redux';

const incomeReducer = (amount = 0, action) => {
    switch (action.type) {
        case 'ADD_INCOME':
            return amount + action.payload;
        default:
            return amount;
    }
}

const expenseReducer = (amount = 0, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return amount + action.payload;
        default:
            return amount;
    }
}

const incomeListReducer = (oldList = [], action) => {
    switch (action.type) {
        case 'ADD_INCOME_ITEM':
            return [...oldList, action.payload];
        case 'REMOVE_INCOME_ITEM':
            return oldList.filter(item => item.id != action.payload);
        default:
            return oldList;
    }
}

const expenseListReducer = (oldList = [], action) => {
    switch (action.type) {
        case 'ADD_EXPENSE_ITEM':
            return [...oldList, action.payload];
        case 'REMOVE_EXPENSE_ITEM':
            return oldList.filter(item => item.id != action.payload);
        default:
            return oldList;
    }
}

export default combineReducers({
    income: incomeReducer,
    expenses: expenseReducer,
    incomeList: incomeListReducer,
    expensesList: expenseListReducer
})