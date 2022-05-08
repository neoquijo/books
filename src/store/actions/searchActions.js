import { fetchBooksByName, setQuery, setSearchResult } from "./types";
export const ASetQuery = (value)=> ({type:setQuery, payload:value})
export const ASetSearchResult = (value) => ({type:setSearchResult, payload:value})
export const AFetchBooksByName = (value) => ({type:fetchBooksByName, payload:value})