import {createSlice} from '@reduxjs/toolkit';
import {fetchAssets, fetchLiabilities, addExpenseItem, addIncomeItem, removeExpenseItem, removeIncomeItem} from './actions'

const INITIAL_STATE = {
    income: 0,
    expenses: 0,
    assets: [],
    liabilities: []
}

export const blitzSlice = createSlice({
    name: 'blitz',
    initialState: INITIAL_STATE,
    reducers: {
        addIncome: (state, action) => { state.income = state.income + action.payload },
        addExpense: (state, action) => { state.expenses = state.expenses + action.payload},
        setIncome: (state, action) => { state.income = action.payload },
        setExpenses: (state, action) => { state.expenses = action.payload }
    },
    extraReducers: {
        [fetchAssets.fulfilled]: (state, action) => { state.assets = action.payload },
        [fetchLiabilities.fulfilled]: (state, action) => { state.liabilities = action.payload },
        [addIncomeItem.fulfilled]: (state, action) => { state.assets.push(action.payload) },
        [addExpenseItem.fulfilled]: (state, action) => { state.liabilities.push(action.payload) },
        [removeIncomeItem.fulfilled]: (state, action) => { state.assets = state.assets.filter(asset => asset.itemId !== action.payload) },
        [removeExpenseItem.fulfilled]: (state, action) => { state.liabilities = state.liabilities.filter(liability => liability.itemId !== action.payload) },

    }
})

