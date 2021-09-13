import {takeLatest} from '@redux-saga/core/effects'

import {fetchCharacter, types} from './actions'

function* mySaga() {
  yield takeLatest(types.FETCH_CHARACTER_REQUEST, fetchCharacter)
}

export {mySaga}
