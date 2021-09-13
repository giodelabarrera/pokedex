// import {configureStore} from '@reduxjs/toolkit'
// import {setupListeners} from '@reduxjs/toolkit/query/react'

// import pokemonApi from 'store/services/pokemonApi'

// export const store = configureStore({
//   reducer: {
//     [pokemonApi.reducerPath]: pokemonApi.reducer
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(pokemonApi.middleware)
// })

// setupListeners(store.dispatch)

import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import {mySaga} from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)

export {store}
