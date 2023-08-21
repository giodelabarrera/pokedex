import queryString from 'query-string';
import { type Location, type NavigateFunction } from 'react-router';

type MyLocation = Location & { href?: string }

function updateLocation(queryReplacements: Record<string, any>, location: MyLocation) {
  const encodedSearchString = queryString.stringify(queryReplacements)
  const search = encodedSearchString && `?${encodedSearchString}`
  const href = queryString.parseUrl(location.href ?? '').url + search

  return {
    ...location,
    key: `${Date.now()}`,
    href,
    search
  } as MyLocation
}

function updateInLocation(queryReplacements: Record<string, any>, location: MyLocation) {
  const currentQueryParams = queryString.parse(location.search)
  const newQueryReplacements = {
    ...currentQueryParams,
    ...queryReplacements
  }
  return updateLocation(newQueryReplacements, location)
}

type UpdateType = 'replace' | 'push' | 'replaceIn' | 'pushIn'

function createLocationWithChanges(queryReplacements: Record<string, any>, location: MyLocation, updateType: UpdateType) {
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

function updateUrlQuery(navigate: NavigateFunction, location: Location, updateType: UpdateType) {
  switch (updateType) {
    case 'pushIn':
    case 'push':
      navigate(location)
      break
    case 'replaceIn':
    case 'replace':
    default:
      navigate(location, { replace: true })
      break
  }
}

function setLocation(queryReplacements: Record<string, any>, updateType: UpdateType, location: MyLocation, navigate: NavigateFunction) {
  const newLocation = createLocationWithChanges(queryReplacements, location, updateType)
  updateUrlQuery(navigate, newLocation, updateType)
}

export default setLocation
