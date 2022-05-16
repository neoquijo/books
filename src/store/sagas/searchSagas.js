import { call, put, select, takeEvery } from "redux-saga/effects";
import { getBooksByName } from "../actions/types";
import { fetchBooksByName} from '../../api'
import { ASetSearchResult } from "../actions/searchActions";
function* searchWorker(){
    
    const query = yield select(state=>state.search.query)
    const data = yield call(fetchBooksByName, query)
    yield put(ASetSearchResult(data))

}

export function* searchWatcher(){
    yield takeEvery(getBooksByName, searchWorker)
}