type Input = null | string | Array<string>

function getEncodedValue(input: Input, allowEmptyString: boolean) {
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

export function encodeString(str: null | string | number) {
  if (str === null) return str
  return String(str)
}

export function decodeString(input: Input) {
  const str = getEncodedValue(input, true)
  if (str === null) return str
  return String(str)
}
