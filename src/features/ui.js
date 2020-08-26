import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import unsplash from '../apis/unsplash'

const INITIAL_STATE = {
    showCreateModal: false,
    showUnsplashModal: false,
    showSidebar: false,
    unsplashImages: [],
    selectedUnsplashImage: ''
}

export const searchUnsplash = createAsyncThunk(
    'modal/searchUnsplash',
    async (word) => {
        const imageList = await unsplash.get(`/search/photos`, {
            params: {
                query: word
            }
        });
        return {
            imageList: imageList.data.results
        }
    }
)

export const uiSlice = createSlice({
    name: 'modal',
    initialState: INITIAL_STATE,
    reducers: {
        showCreateModal: state => { state.showCreateModal = true },
        showUnsplashModal: state => { state.showUnsplashModal = true },
        hideCreateModal: state => { state.showCreateModal = false },
        hideUnsplashModal: state => { state.showUnsplashModal = false },
        showSidebar: state => { state.showSidebar = true },
        hideSidebar: state => { state.showSidebar = false},
        selectUnplashImage: (state, action) => { state.selectedUnsplashImage = action.payload }
    },
    extraReducers: {
        [searchUnsplash.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.unsplashImages = action.payload.imageList
        }
    }
})

export const {
    showCreateModal, showUnsplashModal,
    hideCreateModal, hideUnsplashModal, 
    showSidebar, hideSidebar,
    selectUnplashImage
} = uiSlice.actions;