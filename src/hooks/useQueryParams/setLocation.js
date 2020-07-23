import {stringify, parseUrl} from 'query-string'

function createLocationWithChanges(queryReplacements, location) {
  const encodedSearchString = stringify(queryReplacements)
  const search = encodedSearchString && `?${encodedSearchString}`
  const href = parseUrl(location.href || '').url + search

  return {
    ...location,
    key: `${Date.now()}`,
    href,
    search
  }
}

function updateUrlQuery(navigate, location, updateType) {
  switch (updateType) {
    case 'push':
      navigate(location)
      break
    case 'replace':
    default:
      navigate(location, {replace: true})
      break
  }
}

function setLocation(queryReplacements, updateType, location, navigate) {
  const newLocation = createLocationWithChanges(queryReplacements, location)
  updateUrlQuery(navigate, newLocation, updateType)
}

export default setLocation
