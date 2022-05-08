import { hideSearchResultBody, setDisplayBook, showSearchResultBody } from "./types";

export const ASetDisplayBook = (value) => ({type: setDisplayBook, payload:value})
export const AHideSearchResultBody = () => ({type:hideSearchResultBody})
export const AShowSearchResultBody = () => ({type:showSearchResultBody})
