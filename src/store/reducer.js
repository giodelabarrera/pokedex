import {combineReducers} from 'redux'

import {characterReducer} from './character'
import {charactersReducer} from './characters'

const rootReducer = combineReducers({
  character: characterReducer,
  characters: charactersReducer
})

export default rootReducer
