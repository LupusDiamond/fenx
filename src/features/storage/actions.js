import {createAsyncThunk} from '@reduxjs/toolkit';
import server from "../../apis/server";

export const fetchVaults = createAsyncThunk(
    'vault/fetchVaults',
    async userId => {
        const vaults = await server.get(`/vaults/${userId}`);
        return vaults.data;
    }
)
export const createVault = createAsyncThunk(
    'vault/createVault',
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