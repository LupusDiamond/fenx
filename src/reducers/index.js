import { combineReducers } from "redux";
import {
  uiSlice,
  userSlice,
  globalSlice,
  storageSlice,
  blitzSlice,
  vaultSlice,
} from "../features";

export default combineReducers({
  storage: storageSlice.reducer,
  vault: vaultSlice.reducer,
  blitz: blitzSlice.reducer,
  user: userSlice.reducer,
  global: globalSlice.reducer,
  ui: uiSlice.reducer,
});
