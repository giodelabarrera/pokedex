import {types} from '../actions'

const initialState = {
  data: undefined,
  loading: false,
  error: undefined
}

function character(state = initialState, action) {
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

export default character
