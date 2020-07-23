import {useMemo, useCallback} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'

import {setLocation} from './utils'

function useQueryParam(name, paramConfig) {
  const location = useLocation()
  const navigate = useNavigate()

  const decodedValue = useMemo(
    () => getDecodedValue(location, name, paramConfig),
    [location, name, paramConfig]
  )

  const setValue = useCallback(
    (newValue, updateType) => {
      const newEncodedValue = paramConfig.encode(newValue)
      // update new url
      setLocation({[name]: newEncodedValue}, updateType, location, navigate)
    },
    [location, name, navigate, paramConfig]
  )

  return [decodedValue, setValue]
}

// external function
function parseQueryString(string) {
  return {}
}

function getDecodedValue(location, name, paramConfig) {
  const parsedQueryParams = parseQueryString(location.search)
  const encodedValue = parsedQueryParams[name]
  return paramConfig.decode(encodedValue)
}

export default useQueryParam
