import {createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE = {
    page: '/'
}

export const globalSlice = createSlice({
    name: 'global',
    initialState: INITIAL_STATE,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        }
    }
})

export const {setPage} = globalSlice.actions;