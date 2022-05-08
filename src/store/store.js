import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from "./sagas";
const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({reducer:rootReducer, middleware:[sagaMiddleware]}, )

sagaMiddleware.run(rootWatcher)

