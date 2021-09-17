import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducer'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)

export default store
