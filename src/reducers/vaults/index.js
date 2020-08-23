import {
    SHOW_CREATE_MODAL,
    HIDE_CREATE_MODAL,
    FETCH_VAULTS,
    CREATE_VAULT,
    DELETE_VAULT,
    SHOW_UNSPLASH_MODAL,
    HIDE_UNSPLASH_MODAL,
    SEARCH_UNSPLASH_IMAGE,
    SELECT_UNSPLASH_IMAGE,
    VAULT_DEPOSIT,
    VAULT_WITHDRAW,
    CHANGE_VAULT_DETAILS,
    SHARE_VAULT,
    REMOVE_VAULT_CONTRIBUTOR,
    FETCH_VAULT_CONTRIBUTORS,
    FETCH_VAULT_TRANSACTIONS,
    CREATE_VAULT_TRANSACTION,
    SET_VAULT_GOAL,
    REMOVE_VAULT_GOAL
} from '../../actions/types';

const INITIAL_STATE = {
    showCreateModal: false,
    showUnsplashModal: false,
    vaults: [],
    images: [],
    modalPreviewImage: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_VAULTS:
            return {...state, vaults: action.payload.data};
        case CREATE_VAULT:
            const oldVaults = state.vaults;
            return {...state, vaults: [...oldVaults, action.payload]};
        case DELETE_VAULT:
            const newVaults = state.vaults.filter(vault => vault._id !== action.payload);
            return {...state, vaults: newVaults}
        case SHOW_CREATE_MODAL:
            return {...state, showCreateModal: true}
        case HIDE_CREATE_MODAL:
            return {...state, showCreateModal: false};
        case SHOW_UNSPLASH_MODAL:
            return {...state, showUnsplashModal: true, showCreateModal: false};
        case HIDE_UNSPLASH_MODAL:
            return {...state, showUnsplashModal: false, showCreateModal: true};
        case SEARCH_UNSPLASH_IMAGE:
            return {...state, images: action.payload.data.results};
        case SELECT_UNSPLASH_IMAGE:
            return {...state, modalPreviewImage: action.payload}
        default:
            return state;
    }
}