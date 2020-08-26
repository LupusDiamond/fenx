import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import server from '../apis/server';

const INITIAL_STATE = {
    isSignedIn: false,
    userId: '',
    profilePicture: '',
    username: ''
}

export const signIn = createAsyncThunk(
    'user/signIn',
    async (information) => {
        const {userId, username, profilePicture} = information;
        await server.post("/users/new", {
            username, userId, imageURL: profilePicture
        });
        return {
            userId, username, profilePicture
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        signOut: (state) => {
            return INITIAL_STATE
        }
    },
    extraReducers: {
        [signIn.fulfilled]: (state, action) => {
            state.isSignedIn = true;
            const {userId, profilePicture, username} = action.payload;
            state.userId = userId;
            state.profilePicture = profilePicture
            state.username = username
        }
    }
})

export const {signOut} = userSlice.actions;