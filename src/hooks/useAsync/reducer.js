import {getStatusProps, statusTypes} from './status'

export const actionTypes = {
  start: 'start',
  fulfill: 'fulfill',
  reject: 'reject'
}

export const initialState = {
  data: undefined,
  error: null,
  ...getStatusProps(statusTypes.pending)
}

export function reducer(state, {type, payload}) {
  switch (type) {
    case actionTypes.start: {
      return {
        ...state,
        ...getStatusProps(statusTypes.pending)
      }
    }
    case actionTypes.fulfill: {
      return {
        ...state,
        data: payload,
        ...getStatusProps(statusTypes.fulfilled)
      }
    }
    case actionTypes.reject: {
      return {
        ...state,
        error: payload,
        ...getStatusProps(statusTypes.rejected)
      }
    }
    default:
      return state
  }
}
