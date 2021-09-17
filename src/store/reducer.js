import {combineReducers} from 'redux'

import {characterReducer} from './character'

const rootReducer = combineReducers({
  character: characterReducer
})

export default rootReducer
