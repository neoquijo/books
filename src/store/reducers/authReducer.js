import { confirmEmail, confirmName, confirmPhone, doLogin, pushMessage, setInputValue, setRegName, setRegStatus, setTempEmail, setTempName, setTempPassword, setTempPhone } from "../actions/types"

const defaultState = {
    isAuth: false,
    user: [],
    tempName: null,
    tempEmail: null,
    tempPhone: null,
    tempPassword: null,
    messages: [{ type: 'incoming', status: 'welcome' }],
    inputValue: null,
    registrationStatus: 'welcome',
    nameConfirmed: null,
    emailConfirmed: null,
    phoneConfirmed: null,
    password: null

}

export const authReducer = (state = defaultState, action) => {


    switch (action.type) {
        case doLogin:
            return state
        case setTempName:
            return { ...state, tempName: action.payload }
        case setTempEmail:
            return { ...state, tempEmail: action.payload }
        case setTempPhone:
            return { ...state, tempPhone: action.payload }
        case setTempPassword:
            return { ...state, tempPassword: action.payload }
        case setRegStatus:
            return { ...state, registrationStatus: action.payload }
        case setInputValue:
            return { ...state, inputValue: action.payload }
        case pushMessage:
            return { ...state, messages: [...state.messages, action.payload] }
        case setRegName:
            return { ...state, nameConfirmed: action.payload }
        case confirmEmail:
            return { ...state, emailConfirmed: action.payload }
        case confirmPhone:
            return { ...state, phoneConfirmed: action.payload }
        default:
            return state
    }
}