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

export enum UpdateType {
  Replace = 'replace',
  Push = 'push',
  ReplaceIn = 'replaceIn',
  PushIn = 'pushIn'
}

function createLocationWithChanges(queryReplacements: Record<string, any>, location: MyLocation, updateType: UpdateType) {
  switch (updateType) {
    case UpdateType.Replace:
    case UpdateType.Push:
      return updateLocation(queryReplacements, location)
    case UpdateType.ReplaceIn:
    case UpdateType.PushIn:
    default:
      return updateInLocation(queryReplacements, location)
  }
}

function updateUrlQuery(navigate: NavigateFunction, location: Location, updateType: UpdateType) {
  switch (updateType) {
    case UpdateType.PushIn:
    case UpdateType.Push:
      navigate(location)
      break
    case UpdateType.ReplaceIn:
    case UpdateType.Replace:
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
