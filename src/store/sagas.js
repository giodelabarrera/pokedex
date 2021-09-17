import {takeLatest} from '@redux-saga/core/effects'

import {fetchCharacter, types} from './character'

function* mySaga() {
  yield takeLatest(types.FETCH_CHARACTER_REQUEST, fetchCharacter)
}

export default mySaga
