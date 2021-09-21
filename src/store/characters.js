import {call, put} from 'redux-saga/effects'

import domain from '../domain'

const types = {
  FETCH_CHARACTERS_REQUEST: 'FETCH_CHARACTERS_REQUEST',
  FETCH_CHARACTERS_SUCCEEDED: 'FETCH_CHARACTERS_SUCCEEDED',
  FETCH_CHARACTERS_FAILED: 'FETCH_CHARACTERS_FAILED',
  FETCH_CHARACTERS_LOAD_MORE_REQUEST: 'FETCH_CHARACTERS_LOAD_MORE_REQUEST',
  FETCH_CHARACTERS_LOAD_MORE_SUCCEEDED: 'FETCH_CHARACTERS_LOAD_MORE_SUCCEEDED'
}

function* fetchCharacters(action) {
  const {payload} = action
  const {query, limit, sort, offset} = payload

  try {
    const data = yield call(
      domain.get('pokemon__get_pokemon_list_use_case').execute,
      {query, limit, sort, offset}
    )
    yield put({type: types.FETCH_CHARACTERS_SUCCEEDED, payload: data})
  } catch (error) {
    yield put({
      type: types.FETCH_CHARACTERS_FAILED,
      payload: error,
      error: true
    })
  }
}

function* fetchLoadMoreCharacters(action) {
  const {payload} = action
  const {query, limit, sort, offset} = payload

  try {
    const data = yield call(
      domain.get('pokemon__get_pokemon_list_use_case').execute,
      {query, limit, sort, offset}
    )
    yield put({type: types.FETCH_CHARACTERS_LOAD_MORE_SUCCEEDED, payload: data})
  } catch (error) {
    yield put({
      type: types.FETCH_CHARACTERS_FAILED,
      payload: error,
      error: true
    })
  }
}

const initialState = {
  data: undefined,
  loading: false,
  error: undefined,
  loadingMore: false
}

function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_CHARACTERS_REQUEST: {
      return {
        ...state,
        data: undefined,
        loading: true,
        error: undefined
      }
    }
    case types.FETCH_CHARACTERS_SUCCEEDED: {
      const {payload} = action
      return {
        ...state,
        data: payload,
        error: undefined,
        loading: false
      }
    }
    case types.FETCH_CHARACTERS_FAILED: {
      const {payload} = action
      return {
        ...state,
        error: payload,
        data: undefined,
        loading: false
      }
    }
    case types.FETCH_CHARACTERS_LOAD_MORE_REQUEST: {
      return {
        ...state,
        loadingMore: true
      }
    }
    case types.FETCH_CHARACTERS_LOAD_MORE_SUCCEEDED: {
      const {data: prevData} = state
      const data = {
        ...prevData,
        results: prevData.results.concat(action.payload.results)
      }
      return {
        ...state,
        data,
        error: undefined,
        loadingMore: false
      }
    }
    default: {
      return state
    }
  }
}

export {types, fetchCharacters, fetchLoadMoreCharacters, charactersReducer}
