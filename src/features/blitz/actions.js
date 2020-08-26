import {createAsyncThunk} from '@reduxjs/toolkit';
import server from '../../apis/server'

export const fetchAssets = createAsyncThunk(
    'blitz/fetchAssets',
    async (userId) => {
        const dashboard = await server.get(`/dashboard/${userId}`, {
            "type": "ASSETS"
        });
        return dashboard.data.assets
    }
)

export const fetchLiabilities = createAsyncThunk(
    'blitz/fetchLiabilities',
    async (userId) => {
        const dashboard = await server.get(`/dashboard/${userId}`, {
            "type": "ASSETS"
        });
        return dashboard.data.liabilities
    }
)

export const addIncomeItem = createAsyncThunk(
    'blitz/addIncomeItem',
    async (information) => {
        const {id, name, amount, userId} = information;
        server.post(`/dashboard/${userId}`, {
            "label": name,
            "amount": amount,
            "listType": "ASSETS"
        });
        return {
            payload: {
                _id: id,
                label: name,
                amount: amount,
                listType: "ASSETS"
            }
        }
    }
)

export const addExpenseItem = createAsyncThunk(
    'blitz/addExpenseItem',
    async (information) => {
        const {id, name, amount, userId} = information;
        server.post(`/dashboard/${userId}`, {
            "label": name,
            "amount": amount,
            "listType": "LIABILITIES"
        });
        return {
            payload: {
                _id: id,
                label: name,
                amount: amount,
                listType: "LIABILITIES"
            }
        }
    }
)

export const removeIncomeItem = createAsyncThunk(
    'blitz/removeIncomeItem',
    async (information) => {
        const {userId, itemId} = information;
        await server.delete(`/dashboard/${userId}/${itemId}/ASSETS`);
        return itemId
    }
)

export const removeExpenseItem = createAsyncThunk(
    'blitz/removeExpenseItem',
    async (information) => {
        const {userId, itemId} = information;
        await server.delete(`/dashboard/${userId}/${itemId}/LIABILITIES`);
        return itemId
    }
)