import { fetchDisplayBook, hideSearchResultBody, loginModalShow, setDisplayBook, showSearchResultBody, startRegistration } from "./types";

export const AFetchDisplayBook = (value) => ({type:fetchDisplayBook, payload:value})
export const ASetDisplayBook = (value) => ({type: setDisplayBook, payload:value})
export const AHideSearchResultBody = () => ({type:hideSearchResultBody})
export const AShowSearchResultBody = () => ({type:showSearchResultBody})
export const AShowLoginModal = () => ({type:loginModalShow})
export const AStartRegistration = () => ({type:startRegistration})
