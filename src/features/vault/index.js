import {createSlice} from '@reduxjs/toolkit';
import {selectVault} from './actions'

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
        exitVault = (state) => INITIAL_STATE,
    },
    extraReducers: {
        [selectVault.fulfilled]: (state, action) => {
            const {vaultId, label, totalAmount, imageURL} = action.payload;
            state.vaultId = vaultId;
            state.label = label;
            state.totalAmount = totalAmount;
            state.imageURL = imageURL;
        }
    }
})