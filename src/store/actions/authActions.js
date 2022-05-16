import { useDispatch } from "react-redux"
import { confirmEmail, confirmName, confirmPhone, pushMessage, setInputValue, setRegName, setRegStatus, setTempEmail, setTempName, setTempPassword, setTempPhone } from "./types"

export const ASetTempName = (value) => ({ type: setTempName, payload: value })
export const ASetTempEmail = (value) => ({ type: setTempEmail, payload: value })
export const ASetTempPhone = (value) => ({ type: setTempPhone, payload: value })
export const ASetTempPassword = (value) => ({ type: setTempPassword, payload: value })
export const ASetRegStatus = (value) => ({ type: setRegStatus, payload: value })
export const ASetInputValue = (value) => ({ type: setInputValue, payload: value })
export const APushMessage = (value) => ({ type: pushMessage, payload: value })
export const AConfirmName = (value) => ({ type: confirmName, payload: value })
export const AConfirmEmail = (value) => ({ type: confirmEmail, payload: value })
export const AConfirmPhone = (value) => ({ type: confirmPhone, payload: value })
export const ASetRegName = (value) => ({ type: setRegName, payload: value })
