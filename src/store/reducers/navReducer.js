import { hideSearchResultBody, setDisplayBook, showSearchResultBody } from "../actions/types"

const initialState={
    displayBook: null,
    lastSearch:null,
    showSearchResultBody: false
}

export const navReducer = (state=initialState, action) => {
    switch (action.type){
        case setDisplayBook:
            return {...state, displayBook:action.payload}
        case hideSearchResultBody:
            return {...state, showSearchResultBody: false}
        case showSearchResultBody:
            return {...state, showSearchResultBody: true}
    default: return state
    }
}