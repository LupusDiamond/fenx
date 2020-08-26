import {combineReducers} from "redux";
import vaultDetailsReducer from './vaults/details';
import {uiSlice, userSlice, globalSlice, storageSlice, blitzSlice} from '../features';

export default combineReducers({
    vaultDetails: vaultDetailsReducer,
    vaults: storageSlice.reducer,
    blitz: blitzSlice.reducer,
    user: userSlice.reducer,
    global: globalSlice.reducer,
    ui: uiSlice.reducer
})