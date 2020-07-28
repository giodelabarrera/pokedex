import {useReducer, useCallback, useEffect} from 'react'

import {actionTypes, reducer, initialState} from './reducer'

export default function useAsync(promiseFn) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const load = useCallback(() => {
    promiseFn()
      .then(data => dispatch({type: actionTypes.fulfill, payload: data}))
      .catch(error => dispatch({type: actionTypes.reject, payload: error}))
  }, [promiseFn])

  useEffect(() => {
    load()
  }, [load])

  return {...state}
}
