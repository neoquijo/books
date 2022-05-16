import { call, put, takeEvery } from "redux-saga/effects";
import { fetchSingleBook } from "../../api";
import { ASetDisplayBook } from "../actions/navActions";
import { fetchDisplayBook } from "../actions/types";

function* displayBookWorker({ payload }) {
    const data = yield call(fetchSingleBook, payload)
    yield put(ASetDisplayBook(data?.volumeInfo))
}

export function* displayBookWatcher() {
    yield takeEvery(fetchDisplayBook, displayBookWorker)
}