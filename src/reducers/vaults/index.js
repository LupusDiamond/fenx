import {
    SHOW_CREATE_MODAL,
    HIDE_CREATE_MODAL,
    FETCH_VAULTS,
    CREATE_VAULT,
    DELETE_VAULT
} from '../../actions/types';

const INITIAL_STATE = {
    showCreateModal: false,
    vaults: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_VAULTS:
            return {...state, vaults: action.payload.data};
        case CREATE_VAULT:
            const oldVaults = state.vaults;
            return {...state, vaults: [...oldVaults, action.payload]};
        case DELETE_VAULT:
            const newVaults = state.vaults.filter(vault => vault._id != action.payload);
            return {...state, vaults: newVaults}
        case SHOW_CREATE_MODAL:
            return {...state, showCreateModal: true}
        case HIDE_CREATE_MODAL:
            return {...state, showCreateModal: false};
        default:
            return state;
    }
}