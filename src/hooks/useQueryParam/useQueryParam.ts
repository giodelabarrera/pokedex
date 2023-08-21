import { useMemo, useCallback } from 'react'
import { useNavigate, useLocation, type Location } from 'react-router-dom'
import queryString from 'query-string';

import setLocation, { UpdateType } from './setLocation'
import { type ParamConfig } from './params';

function useQueryParam(name: string, paramConfig: ParamConfig) {
  const location = useLocation()
  const navigate = useNavigate()

  const decodedValue = useMemo(
    () => getDecodedValue(location, name, paramConfig) as string,
    [location, name, paramConfig]
  )

  const setValue = useCallback(
    (newValue: string, updateType: UpdateType = UpdateType.PushIn) => {
      const newEncodedValue = paramConfig.encode(newValue)
      // update new url
      setLocation({ [name]: newEncodedValue }, updateType, location, navigate)
    },
    [location, name, navigate, paramConfig]
  )

  return [decodedValue, setValue] as const
}

function getDecodedValue(location: Location, name: string, paramConfig: ParamConfig) {
  const parsedQueryParams = queryString.parse(location.search)
  const encodedValue = parsedQueryParams[name]
  if (typeof encodedValue === 'undefined') return
  return paramConfig.decode(encodedValue)
}

export default useQueryParam
