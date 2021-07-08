/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Type_Action } from '../structures/types'

export default class ActionUtility {
	static CreateAction(
		type: string,
		payload: any,
		error: boolean,
		meta: any
	): Type_Action {
		return {
			type,
			payload,
			error,
			meta,
		}
	}
}
