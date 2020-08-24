import {
    FETCH_VAULTS,
    CREATE_VAULT,
    DELETE_VAULT,
    SET_VAULT_FAVORITE
} from '../types';

import server from '../../apis/server';

export {
    hideCreateModal,
    showCreateModal,
    hideUnsplashModal,
    showUnsplashModal,
    searchUnsplashImage,
    selectUnplashImage
} from './modals';

export {
    selectVault,
    exitVault,
    vaultDeposit,
    vaultWithdraw,
    updateVault,
    shareVault,
    removeContributor,
    fetchContributors,
    fetchTransactions,
    createTransaction,
    setGoal,
    removeGoal
} from './details';

export const fetchVaults = (userId) => async dispatch => {
    const vaults = await server.get(`/vaults/${userId}`);
    return dispatch({
        type: FETCH_VAULTS,
        payload: vaults
    })
}

export const createVault = (userId, id, label, amount, imageUrl, vaultId) => async dispatch => {
    await server.post(`/vaults/${userId}`, {
        "label": label,
        "totalAmount": amount,
        "imageURL": imageUrl,
        "vaultId": vaultId
    });
    return dispatch({
        type: CREATE_VAULT,
        payload: {
            _id: id,
            label, totalAmount: amount, imageURL: imageUrl
        }
    })
}

export const setVaultFavorite = (userId, vaultId, value) => async dispatch => {
    await server.patch(`/vaults/favorite/${userId}/${vaultId}`, {
        "setFavoriteValue": value
    });
    return dispatch({
        type: SET_VAULT_FAVORITE,
        payload: vaultId, value
    })
}

export const deleteVault = (userId, vaultId) => async dispatch => {
    await server.delete(`/vaults/${userId}/${vaultId}`);
    return dispatch({
        type: DELETE_VAULT,
        payload: vaultId
    })
}