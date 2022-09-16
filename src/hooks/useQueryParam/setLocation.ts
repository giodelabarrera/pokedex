import {stringify, parseUrl, parse} from 'query-string'

function updateLocation(queryReplacements, location) {
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

function updateInLocation(queryReplacements, location) {
  const currentQueryParams = parse(location.search)
  const newQueryReplacements = {
    ...currentQueryParams,
    ...queryReplacements
  }
  return updateLocation(newQueryReplacements, location)
}

function createLocationWithChanges(queryReplacements, location, updateType) {
  switch (updateType) {
    case 'replace':
    case 'push':
      return updateLocation(queryReplacements, location)
    case 'replaceIn':
    case 'pushIn':
    default:
      return updateInLocation(queryReplacements, location)
  }
}

function updateUrlQuery(navigate, location, updateType) {
  switch (updateType) {
    case 'pushIn':
    case 'push':
      navigate(location)
      break
    case 'replaceIn':
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
