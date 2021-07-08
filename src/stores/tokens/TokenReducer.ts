/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Type_Action } from '../../structures/types'
import BaseReducer from '../../utilities/BaseReducer'
import TokenAction from './TokenAction'

export default class TokenReducer extends BaseReducer {
	[TokenAction.REQUEST_GET_DETAILS](state: any, action: Type_Action) {
		return {
			...state,
		}
	}
}
