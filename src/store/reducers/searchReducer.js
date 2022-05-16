import { setQuery, setSearchResult } from "../actions/types"

const initialState = {
    query: '',
    searchResult: [],
    test: 'algo'
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case setQuery:
            return { ...state, query: action.payload }

        case setSearchResult:
            return { ...state, searchResult: action.payload }
        default: return state
    }
}