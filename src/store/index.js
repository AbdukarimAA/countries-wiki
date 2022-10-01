import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./root-reducer";
import axios from "axios";
import * as api from '../config'; // importing prepared urls; * - means each one of this file;

export const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // devtools on
export const store = createStore(rootReducer, composeEnhancer(
    applyMiddleware(
        thunk.withExtraArgument({
            client: axios,
            api: api,
        })
    )
));

