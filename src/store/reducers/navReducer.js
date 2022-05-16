import { hideSearchResultBody, loginModalShow, setDisplayBook, showSearchResultBody, startRegistration } from "../actions/types"

const initialState={
    displayBook: null,
    lastSearch:null,
    showSearchResultBody: false,
    loginModal: false,
    startRegistration : false
}

export const navReducer = (state=initialState, action) => {
    switch (action.type){
        case setDisplayBook:
            return {...state, displayBook:action.payload}
        case hideSearchResultBody:
            return {...state, showSearchResultBody: false}
        case showSearchResultBody:
            return {...state, showSearchResultBody: true}
        case loginModalShow:
            return {...state, loginModal: !state.loginModal}
        case startRegistration:
            return {...state, startRegistration: !state.startRegistration}
    default: return state
    }
}