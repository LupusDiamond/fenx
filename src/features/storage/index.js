import {createSlice} from '@reduxjs/toolkit';
import {fetchVaults, createVault} from './actions';
export {fetchVaults, createVault} from './actions';

const INITIAL_STATE = {
    showCreateModal: false,
    showUnsplashModal: false,
    vaults: [],
    images: [],
    modalPreviewImage: ''
}

export const vaultSlice = createSlice({
    name: 'vault',
    initialState: INITIAL_STATE,
    reducers: {

    },
    extraReducers: {
        [fetchVaults.fulfilled]: (state, action) => {
            const {array} = action.payload;
            state.vaults = array;
        },
        [createVault.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.vaults.push(action.payload);
        }
    }
})