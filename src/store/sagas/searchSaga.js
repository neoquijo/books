import { call, put, select, takeEvery } from "redux-saga/effects";
import { fetchBooksByName } from "../actions/types";
import {getBooksByName} from '../../api'
import { ASetSearchResult } from "../actions/searchActions";
function* searchWorker(){
    const query = yield select(state=>state.search.query)
    const data = yield call(getBooksByName, query)
    yield put(ASetSearchResult(data))

}

export function* searchWatcher(){
    yield takeEvery(fetchBooksByName, searchWorker)
}