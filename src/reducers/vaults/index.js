import {
    SHOW_CREATE_MODAL,
    HIDE_CREATE_MODAL
} from '../../actions/types';

const INITIAL_STATE = {
    showCreateModal: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_CREATE_MODAL:
            return {...state, showCreateModal: true}
        case HIDE_CREATE_MODAL:
            return {...state, showCreateModal: false};
        default:
            return state;
    }
}