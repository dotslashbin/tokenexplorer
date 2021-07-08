/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all, takeEvery } from 'redux-saga/effects'
import TokenAction from '../stores/tokens/TokenAction'

import Fetch from './Fetch'

function* actionWatcher() {
	yield takeEvery(TokenAction.REQUEST_GET_DETAILS, Fetch)
}

export default function* rootSaga() {
	yield all([actionWatcher()])
}
