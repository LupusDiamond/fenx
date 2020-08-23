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

export const selectVault = (vaultId) => {
    return {
        type: SELECT_VAULT,
        payload: vaultId
    }
}

export const exitVault = () => {
    return {
        type: EXIT_VAULT
    }
}

export const vaultDeposit = (vaultId, amount) => {
    return {
        type: VAULT_DEPOSIT,
        payload: {
            vaultId,
            amount
        }
    }
}

export const vaultWithdraw = (vaultId, amount) => {
    return {
        type: VAULT_WITHDRAW,
        payload: {
            vaultId, amount
        }
    }
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

export const fetchTransactions = (vaultId) => {
    return {
        type: FETCH_VAULT_TRANSACTIONS
    }
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