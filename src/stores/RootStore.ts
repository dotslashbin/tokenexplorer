import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import root from '../sagas'

import RootReducer from './RootReducer'

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}

const initializeSagaMiddleware = createSagaMiddleware()
const storeEnhancers =
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	(window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const Store = createStore(
	RootReducer,
	storeEnhancers(applyMiddleware(initializeSagaMiddleware))
)

initializeSagaMiddleware.run(root)

export default Store
