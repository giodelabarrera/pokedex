function getEncodedValue(input, allowEmptyString) {
  if (input === null) return input
  // '' or []
  if (
    input.length === 0 &&
    (!allowEmptyString || (allowEmptyString && input !== ''))
  ) {
    return null
  }

  const str = input instanceof Array ? input[0] : input
  if (str == null) return str
  if (!allowEmptyString && str === '') return null

  return str
}

export function encodeString(str) {
  if (str === null) return str
  return String(str)
}

export function decodeString(input) {
  const str = getEncodedValue(input, true)
  if (str === null) return str
  return String(str)
}
