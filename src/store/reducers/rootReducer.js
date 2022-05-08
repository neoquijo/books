import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { navReducer } from "./navReducer";
import { searchReducer } from "./searchReducer";

export const rootReducer = combineReducers(
    { 
        auth: authReducer,
        search: searchReducer,
        nav: navReducer
    })