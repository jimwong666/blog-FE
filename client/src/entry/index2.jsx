import React from 'react';
import ReactDOM from 'react-dom';
import RootRouter from '@router';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../rootReducer";
import {Provider} from "react-redux";
import simpleAsync from '@utils/reduxSimpleAsync';

const store = applyMiddleware(thunk, simpleAsync)(createStore)(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.log(store);
const render = (App) => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
        ,document.getElementById('root'))
};

render(RootRouter);




