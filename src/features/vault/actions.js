import {createAsyncThunk} from '@reduxjs/toolkit';

export const selectVault = createAsyncThunk(
    'vault/selectVault',
    async (information) => {
        const {userId, vaultId} = information;
        const vault = await server.get(`/vaults/${userId}/${vaultId}`);
        return vault;
    }
)

export const vaultDeposit = createAsyncThunk(
    'vault/vaultDeposit',
    async (information) => {
        const transaction = await server.post(`/vaults/contribute/${vaultId}`, {
            "amount": amount,
            "type": "DEPOSIT",
            "username": username,
            "imageURL": imageURL
        });
        return {
            payload: {
                amount,
                type: "DEPOSIT",
                username,
                imageURL,
                date: "Now"
            }
        }
    }
)

export const vaultWithdraw = createAsyncThunk(
    'vault/vaultWithdraw',
    async (information) => {
        const transaction = await server.post(`/vaults/contribute/${vaultId}`, {
            "amount": amount,
            "type": "WITHDRAW",
            "username": username,
            "imageURL": imageURL
        });
        return {
            payload: {
                amount,
                type: "WITHDRAW",
                username,
                imageURL,
                date: "Now"
            }
        }
    }
)

export const fetchTransactions = createAsyncThunk(
    'vault/fetchTransactions',
    async (vaultId) => {
        const transactions = await server.get(`/vaults/transactions/${vaultId}`);
        return transactions;
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
        return updatedVault;
    }
)