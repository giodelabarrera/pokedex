import {call, put} from 'redux-saga/effects'

import domain from '../domain'

const types = {
  FETCH_CHARACTER_REQUEST: 'FETCH_CHARACTER_REQUEST',
  FETCH_CHARACTER_SUCCEEDED: 'FETCH_CHARACTER_SUCCEEDED',
  FETCH_CHARACTER_FAILED: 'FETCH_CHARACTER_FAILED'
}

function* fetchCharacter(action) {
  const {payload: idOrSlug} = action
  try {
    const data = yield call(
      domain.get('pokemon__get_pokemon_use_case').execute,
      {idOrSlug}
    )
    yield put({type: types.FETCH_CHARACTER_SUCCEEDED, payload: data})
  } catch (error) {
    yield put({
      type: types.FETCH_CHARACTER_FAILED,
      payload: error,
      error: true
    })
  }
}

const initialState = {
  data: undefined,
  loading: false,
  error: undefined
}

function characterReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_CHARACTER_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case types.FETCH_CHARACTER_SUCCEEDED: {
      const {payload} = action
      return {
        ...state,
        data: payload,
        error: undefined,
        loading: false
      }
    }
    case types.FETCH_CHARACTER_FAILED: {
      const {payload} = action
      return {
        ...state,
        error: payload,
        data: undefined,
        loading: false
      }
    }
    default: {
      return state
    }
  }
}

export {types, fetchCharacter, characterReducer}
