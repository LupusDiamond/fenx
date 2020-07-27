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

export default combineReducers({
    income: incomeReducer,
    expenses: expenseReducer
})