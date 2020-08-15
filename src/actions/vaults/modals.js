import {
    SHOW_CREATE_MODAL,
    HIDE_CREATE_MODAL,
    HIDE_UNSPLASH_MODAL,
    SHOW_UNSPLASH_MODAL,
    SEARCH_UNSPLASH_IMAGE,
    SELECT_UNSPLASH_IMAGE
} from '../types';

import unsplash from '../../apis/unsplash';

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

export const showUnsplashModal = () => {
    return {
        type: SHOW_UNSPLASH_MODAL
    }
}

export const hideUnsplashModal = () => {
    return {
        type: HIDE_UNSPLASH_MODAL
    }
}

export const searchUnsplashImage = (word) => async dispatch => {
    const imageList = await unsplash.get(`/search/photos`, {
        params: {
            query: word
        }
    })
    return dispatch({
        type: SEARCH_UNSPLASH_IMAGE,
        payload: imageList
    })
}

export const selectUnplashImage = (url) => {
    return {
        type: SELECT_UNSPLASH_IMAGE,
        payload: url
    }
}