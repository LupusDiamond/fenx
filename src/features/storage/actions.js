import {createAsyncThunk} from '@reduxjs/toolkit';
import server from "../../apis/server";

export const fetchVaults = createAsyncThunk(
    'storage/fetchVaults',
    async userId => {
        const vaults = await server.get(`/vaults/${userId}`);
        return vaults.data;
    }
)
export const createVault = createAsyncThunk(
    'storage/createVault',
    async (information) => {
        console.log(information);
        const {userId, id, label, amount, imageUrl, vaultId} = information;
        await server.post(`/vaults/${userId}`, {
            "label": label,
            "totalAmount": amount,
            "imageURL": imageUrl,
            "vaultId": vaultId
        });
        return {
            _id: id,
            label, totalAmount: amount, imageURL: imageUrl
        }
    }
)
export const deleteVault = createAsyncThunk(
    'storage/deleteVault',
    async (information) => {
        const {userId, vaultId} = information;
        await server.delete(`/vaults/${userId}/${vaultId}`);
        return {
            vaultId
        }
    }
)