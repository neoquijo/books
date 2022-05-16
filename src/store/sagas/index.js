import { all } from 'redux-saga/effects'
import { chatRegWatcher } from './authSaga'
import { displayBookWatcher } from './navSagas'
import { searchWatcher } from './searchSagas'

export function* rootWatcher() {
    yield all([searchWatcher(), displayBookWatcher(), chatRegWatcher()])
}