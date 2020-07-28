import {getStatusProps, statusTypes} from './status'

export const actionTypes = {
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
