import {createSlice} from '@reduxjs/toolkit';
import {fetchVaults, createVault, deleteVault} from './actions';
export {fetchVaults, createVault, deleteVault} from './actions';

const INITIAL_STATE = {
    vaults: [],
    images: [],
    modalPreviewImage: ''
}

export const storageSlice = createSlice({
    name: 'storage',
    initialState: INITIAL_STATE,
    reducers: {

    },
    extraReducers: {
        [fetchVaults.fulfilled]: (state, action) => {
            const {array} = action.payload;
            state.vaults = array;
        },
        [createVault.fulfilled]: (state, action) => {
            state.vaults.push(action.payload);
        },
        [deleteVault.fulfilled]: (state, action) => {
            state.vaults = state.vaults.filter(vault => vault.vaultId !== action.payload.id);
        }
    }
})