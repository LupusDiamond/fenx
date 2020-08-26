import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk'

import App from './components/App';
import reducers from './reducers';

import './assets/main.css';

// Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer: reducers,
  middleware: [thunkMiddleware, ...getDefaultMiddleware()],
});

/*const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
)*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector("#root"));
