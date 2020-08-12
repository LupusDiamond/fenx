import {
    SHOW_CREATE_MODAL,
    HIDE_CREATE_MODAL
} from '../types';

export const showCreateModal = () => {
    return {
        type: SHOW_CREATE_MODAL
    }
}

export const hideCreateModal = () => {
    return {
        type: HIDE_CREATE_MODAL
    }
}