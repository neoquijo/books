import { doLogin } from "../actions/types"

const defaultState = {
    isAuth: false,
    user: []
}

export const authReducer = (state=defaultState, action)=>{
  
    
    switch (action.type) {
        case doLogin: 
        console.log('lol')
        return state
        default:
            return state
    }
}