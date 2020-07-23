// external function
function updateLocation(queryReplacements, location) {
  return 'pepe'
}

function createLocationWithChanges(queryReplacements, location) {
  return updateLocation(queryReplacements, location)
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

export {createLocationWithChanges, setLocation, updateUrlQuery}
