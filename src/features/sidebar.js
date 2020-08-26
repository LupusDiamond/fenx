import {createSlice} from '@reduxjs/toolkit';
export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: false,
    reducers: {
        showSidebar: state => true,
        hideSidebar: state => false
    }
});
export const {showSidebar, hideSidebar} = sidebarSlice.actions;