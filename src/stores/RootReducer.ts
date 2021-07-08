import { combineReducers } from 'redux'
import TokenReducer from './tokens/TokenReducer'

export default combineReducers({
	TokenData: new TokenReducer().reducer,
})
