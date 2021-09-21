import {takeEvery} from '@redux-saga/core/effects'

import {fetchCharacter, types as characterTypes} from './character'
import {
  fetchCharacters,
  fetchLoadMoreCharacters,
  types as charactersTypes
} from './characters'

function* mySaga() {
  yield takeEvery(characterTypes.FETCH_CHARACTER_REQUEST, fetchCharacter)
  yield takeEvery(charactersTypes.FETCH_CHARACTERS_REQUEST, fetchCharacters)
  yield takeEvery(
    charactersTypes.FETCH_CHARACTERS_LOAD_MORE_REQUEST,
    fetchLoadMoreCharacters
  )
}

export default mySaga
