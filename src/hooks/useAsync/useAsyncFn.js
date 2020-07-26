import {useReducer, useMemo, useCallback} from 'react'

import {actionTypes, reducer, initialState} from './reducer'

export default function useAsyncFn(promiseFn) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const start = useCallback(
    promiseFn =>
      new Promise((resolve, reject) => {
        dispatch({type: actionTypes.start})
        promiseFn().then(resolve, reject)
      }),
    []
  )

  const setData = useCallback(data => {
    dispatch({type: actionTypes.fulfill, payload: data})
  }, [])

  const setError = useCallback(error => {
    dispatch({type: actionTypes.reject, payload: error})
  }, [])

  const handleResolve = useCallback(data => setData(data), [setData])

  const handleReject = useCallback(error => setError(error), [setError])

  const load = useCallback(() => {
    start(() => promiseFn())
      .then(handleResolve)
      .catch(handleReject)
  }, [handleReject, handleResolve, promiseFn, start])

  const reload = useCallback(() => {
    load()
  }, [load])

  return useMemo(
    () => ({
      ...state,
      reload,
      load
    }),
    [load, reload, state]
  )
}
