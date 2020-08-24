import {
    VAULT_DEPOSIT,
    VAULT_WITHDRAW,
    CHANGE_VAULT_DETAILS,
    SHARE_VAULT,
    REMOVE_VAULT_CONTRIBUTOR,
    FETCH_VAULT_CONTRIBUTORS,
    FETCH_VAULT_TRANSACTIONS,
    CREATE_VAULT_TRANSACTION,
    SET_VAULT_GOAL,
    REMOVE_VAULT_GOAL,
    SELECT_VAULT,
    EXIT_VAULT
} from '../types';

import server from '../../apis/server';

export const selectVault = (userId, vaultId) => async dispatch => {
    const vault = await server.get(`/vaults/${userId}/${vaultId}`);
    return dispatch({
        type: SELECT_VAULT,
        payload: vault
    });
}

export const exitVault = () => {
    return {
        type: EXIT_VAULT
    }
}

export const vaultDeposit = (username, vaultId, amount, imageURL) => async dispatch => {
    const transaction = await server.post(`/vaults/contribute/${vaultId}`, {
        "amount": amount,
        "type": "DEPOSIT",
        "username": username,
        "imageURL": imageURL
    });
    return dispatch({
        type: VAULT_DEPOSIT,
        payload: {
            amount,
            type: "DEPOSIT",
            username,
            imageURL,
            date: "Now"
        }
    });
}

export const vaultWithdraw = (username, vaultId, amount, imageURL) => async dispatch => {
    const transaction = await server.post(`/vaults/contribute/${vaultId}`, {
        "amount": amount,
        "type": "WITHDRAW",
        "username": username,
        "imageURL": imageURL
    });
    return dispatch({
        type: VAULT_WITHDRAW,
        payload: {
            amount,
            type: "WITHDRAW",
            username,
            imageURL,
            date: "Now"
        }
    })
}

export const updateVault = (vaultId, label, amount, imageURL) => {
    return {
        type: CHANGE_VAULT_DETAILS
    }
}

export const shareVault = (vaultId) => {
    return {
        type: SHARE_VAULT
    }
}

export const removeContributor = (vaultId, contributorId) => {
    return {
        type: REMOVE_VAULT_CONTRIBUTOR
    }
}

export const fetchContributors = (vaultId) => {
    return {
        type: FETCH_VAULT_CONTRIBUTORS
    }
}

export const fetchTransactions = (vaultId) => async dispatch => {
    const transactions = await server.get(`/vaults/transactions/${vaultId}`);
    return dispatch({
        type: FETCH_VAULT_TRANSACTIONS,
        payload: transactions
    })
}

export const createTransaction = (vaultId, name, amount, action) => {
    return {
        type: CREATE_VAULT_TRANSACTION
    }
}

export const setGoal = (vaultId, deadline, amount, format) => {
    return {
        type: SET_VAULT_GOAL
    }
}

export const removeGoal = (vaultId) => {
    return {
        type: REMOVE_VAULT_GOAL
    }
}