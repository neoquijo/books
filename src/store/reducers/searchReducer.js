import { setQuery, setSearchResult } from "../actions/types"

const initialState = {
    query: '',
    searchResult: [],
    test:'algo'
}

export const searchReducer = (state=initialState, action) =>{
    switch(action.type){
        case setQuery:
            console.log(state)
            return {...state, query: action.payload}

        case setSearchResult:
            console.log('algoalgoalgo')
            return {...state, searchResult:action.payload}
        default: return state
    }
}