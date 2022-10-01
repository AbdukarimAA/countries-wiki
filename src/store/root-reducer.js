import {combineReducers} from "redux";
import {themeReducer} from "./theme/theme-reducer";
import {countriesReducer} from "./countries/countries-reducers";
import {controlsReducer} from "./controls/controls-reducers";
import {detailsReducer} from "./details/details-reducer";

export const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countriesReducer,
    controls: controlsReducer,
    details: detailsReducer,
});