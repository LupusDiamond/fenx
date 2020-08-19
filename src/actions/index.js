import {
    SIGN_IN,
    SIGN_OUT,
    HIDE_SIDEBAR,
    SHOW_SIDEBAR,
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
    hideUnsplashModal, hideCreateModal, showCreateModal, searchUnsplashImage, selectUnplashImage
} from "./vaults";

export const signIn = (userId, username, profilePicture) => async dispatch => {
    server.post("/users/new", {
        username, userId
    });
    console.log(username, userId);
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

export const hideSidebar = () => {
    return {
        type: HIDE_SIDEBAR
    }
}

export const showSidebar = () => {
    return {
        type: SHOW_SIDEBAR
    }
}