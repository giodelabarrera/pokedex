import {getStatusProps, statusTypes} from './status'

export const actionTypes = {
  start: 'start',
  fulfill: 'fulfill',
  reject: 'reject'
}

export const initialState = {
  data: undefined,
  error: null,
  ...getStatusProps(statusTypes.loading)
}

export function reducer(state, {type, payload}) {
  switch (type) {
    case actionTypes.start: {
      return {
        ...state,
        ...getStatusProps(statusTypes.loading)
      }
    }
    case actionTypes.fulfill: {
      return {
        ...state,
        data: payload,
        ...getStatusProps(statusTypes.success)
      }
    }
    case actionTypes.reject: {
      return {
        ...state,
        error: payload,
        ...getStatusProps(statusTypes.error)
      }
    }
    default:
      return state
  }
}
