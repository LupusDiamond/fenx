import {createAsyncThunk} from '@reduxjs/toolkit';
import server from '../../apis/server'

export const selectVault = createAsyncThunk(
    'vault/selectVault',
    async (information) => {
        const {userId, vaultId} = information;
        const vault = await server.get(`/vaults/${userId}/${vaultId}`);
        console.log(vault);
        return vault.data;
    }
)

export const vaultDeposit = createAsyncThunk(
    'vault/vaultDeposit',
    async (information) => {
        const {vaultId, amount, username, imageURL} = information;
        const transaction = await server.post(`/vaults/contribute/${vaultId}`, {
            "amount": amount,
            "type": "DEPOSIT",
            "username": username,
            "imageURL": imageURL
        });
        return {
                amount,
                type: "DEPOSIT",
                username,
                imageURL,
                date: "Now"
        }
    }
)

export const vaultWithdraw = createAsyncThunk(
    'vault/vaultWithdraw',
    async (information) => {
        const {vaultId, amount, username, imageURL} = information;
        const transaction = await server.post(`/vaults/contribute/${vaultId}`, {
            "amount": amount,
            "type": "WITHDRAW",
            "username": username,
            "imageURL": imageURL
        });
        return {
                amount,
                type: "WITHDRAW",
                username,
                imageURL,
                date: "Now"
        }
    }
)

export const fetchTransactions = createAsyncThunk(
    'vault/fetchTransactions',
    async (vaultId) => {
        const transactions = await server.get(`/vaults/transactions/${vaultId}`);
        return transactions.data;
    }
)

export const updateVault = createAsyncThunk(
    'vault/updateVault',
    async (information) => {
        const {userId, vaultId, label, amount, imageURL} = information;
        const updatedVault = await server.patch(`/vaults/update/${userId}/${vaultId}`, {
            "label": label,
            "amount": amount,
            "imageURL": imageURL
        });
        return {
            label, amount, imageURL
        }
    }
)

export const fetchGoal = createAsyncThunk(
    'vault/fetchGoal',
    async vaultId => {
        const goal = await server.get(`/vaults/goals/${vaultId}`);
        if (goal.data.hasGoal === false) {
            return {
                hasGoal: false
            }
        } else {
            return {
                hasGoal: true
            }
        }
    }
)