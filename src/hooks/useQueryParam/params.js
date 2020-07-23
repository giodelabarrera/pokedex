import * as serialize from './serialize'

export const StringParam = {
  encode: serialize.encodeString,
  decode: serialize.decodeString
}
