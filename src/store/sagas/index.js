import { all } from 'redux-saga/effects'
import { searchWatcher } from './searchSaga'

export function* rootWatcher(){
    yield all([searchWatcher()])
}