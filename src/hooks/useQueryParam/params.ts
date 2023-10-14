import * as serialize from './serialize'

export interface ParamConfig {
  encode: (value: any) => string | null;
  decode: (value: any) => string | null;
}

export interface StringParamType extends ParamConfig {
  encode: typeof serialize.encodeString,
  decode: typeof serialize.decodeString,
}

export const StringParam: StringParamType = {
  encode: serialize.encodeString,
  decode: serialize.decodeString
}