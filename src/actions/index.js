import {
    SIGN_IN,
    SIGN_OUT,
    SET_PAGE,
} from "./types";

import server from '../apis/server'

export {
    setIncome,
    addIncome,
    addIncomeItem,
    fetchAssets,
    removeIncomeItem
} from './dashboard/incomes';

export {
    setExpense,
    addExpense,
    addExpenseItem,
    fetchLiablities,
    removeExpensesItem
} from './dashboard/expenses';

export {
    fetchVaults, createVault, setVaultFavorite, deleteVault, showUnsplashModal,
    hideUnsplashModal, hideCreateModal, showCreateModal, searchUnsplashImage, selectUnplashImage,
    vaultDeposit, selectVault, exitVault, activateGoal, fetchGoal,
    vaultWithdraw,
    updateVault,
    shareVault,
    removeContributor,
    fetchContributors,
    fetchTransactions,
    createTransaction,
    setGoal,
    removeGoal
} from "./vaults";

export const signIn = (userId, username, profilePicture) => async dispatch => {
    server.post("/users/new", {
        username, userId, imageURL: profilePicture
    });
    return dispatch({
        type: SIGN_IN,
        payload: {
            userId, username, profilePicture
        }
    });
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const setPage = (page) => {
    return {
        type: SET_PAGE,
        payload: page
    }
}