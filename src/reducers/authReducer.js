import {
    SIGN_IN,
    SIGN_OUT
} from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    profilePicture: null,
    username: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            console.log(action.payload);
            return {...state, isSignedIn: true, userId: action.payload.userId, username: action.payload.username, profilePicture: action.payload.profilePicture};
        case SIGN_OUT:
            return {...state, isSignedIn: false, userId: null, username: null, profilePicture: null};
        default:
            return state;
    }
}