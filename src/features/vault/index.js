import {createSlice} from '@reduxjs/toolkit';
import {selectVault, vaultDeposit, vaultWithdraw, fetchTransactions, updateVault, fetchGoal} from './actions';
import { act } from 'react-dom/test-utils';
export {selectVault, vaultDeposit, vaultWithdraw, fetchTransactions, updateVault, fetchGoal} from './actions';

const INITIAL_STATE = {
    vaultId: '',
    label: '',
    imageURL: '',
    totalAmount: '',
    depositedAmount: '',
    contributors: [],
    transactions: [],
    hasGoal: null,
    goal: {
        date: '',
        amount: '',
        format: ''
    }
}
export const vaultSlice = createSlice({
    name: 'vault',
    initialState: INITIAL_STATE,
    reducers: {
        exitVault: (state) => INITIAL_STATE,
        activateGoal: (state) => {
            state.hasGoal = true;
        }
    },
    extraReducers: {
        [selectVault.fulfilled]: (state, action) => {
            const {vaultId, label, totalAmount, imageURL} = action.payload;
            state.vaultId = vaultId;
            state.label = label;
            state.totalAmount = totalAmount;
            state.imageURL = imageURL;
        },
        [fetchTransactions.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.transactions = action.payload
        },
        [vaultDeposit.fulfilled]: (state, action) => {
            state.transactions.push({...action.payload})
        },
        [vaultWithdraw.fulfilled]: (state, action) => {
            state.transactions.push({...action.payload});
        },
        [updateVault.fulfilled]: (state, action) => {
            state.label = action.payload.label;
            state.totalAmount = action.payload.amount;
            state.imageURL = action.payload.imageURL
        },
        [fetchGoal.fulfilled]: (state, action) => {
            state.hasGoal = action.payload.hasGoal;
        }
    }
})

export const {exitVault, activateGoal} = vaultSlice.actions;