import { put, select, takeEvery } from "redux-saga/effects";
import { APushMessage, ASetRegName, ASetRegStatus } from "../actions/authActions";
import { confirmName } from "../actions/types";

function* confirmNameWorker() {
    const name = yield select(s => s.auth.tempName)
    yield console.log(name)
    yield put(ASetRegName(name))
    yield put(ASetRegStatus('askPhone'))
    yield put(APushMessage({ type: 'incoming', status: 'askPhone' }))
}

export function* chatRegWatcher() {
    yield takeEvery(confirmName, confirmNameWorker)
}