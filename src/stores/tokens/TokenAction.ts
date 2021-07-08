import { Type_Action } from '../../structures/types'
import ActionUtility from '../../utilities/Action.utility'

export default class TokenAction {
	static REQUEST_GET_DETAILS = 'TokenAction.REQUEST_GET_DETAILS'
	static REQUEST_SHOW_DETAILS = 'TokenAction.REQUEST_SHOW_DETAILS'
	static REQUEST_SHOW_BUSY = 'TokenAction.REQUEST_SHOW_BUSY'

	static RequestGetDetails = (token: string): Type_Action =>
		ActionUtility.CreateAction(
			TokenAction.REQUEST_GET_DETAILS,
			token,
			false,
			`Action -> ${TokenAction.REQUEST_GET_DETAILS}`
		)
}
