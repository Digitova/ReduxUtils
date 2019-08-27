// @flow
import {normalize} from "normalizr"
import arrayify from "../utils/arrayify";


export const putIds = (actionPayloadProp: string, schema: Object) => (state: Object, action: Object): Array<Object> => {
	const entityArray = arrayify(action.payload[actionPayloadProp])
	const {result: ids} = normalize(entityArray, schema)
	return [...new Set([...state, ...ids])]
}

export const eraseAllIds = () => (state: Object, action: Object) => []

export const eraseId = () => (state: Object, action: Object) => {
	const index = state.indexOf(action.payload.id)
	return [
		...state.slice(0, index),
		...state.slice(index + 1)
	]
}

export const putEntities = (actionPayloadProp: string, schema: Object) => (state: Object, action: Object) => {
	const entitiesArray = arrayify(action.payload[actionPayloadProp])
	const {entities} = normalize(entitiesArray, schema)
	return Object.assign({}, state, (typeof (entities[actionPayloadProp]) === 'undefined' ? {} : entities[actionPayloadProp]))
}

export const generateMetaReducer = () => (state: Object, action: Object) => {
	if(action.meta) {
		const {current_page, from, to, per_page, path, ...remaining} = action.meta
		const pages_loaded = current_page
			? [...new Set([...state.pages_loaded, current_page])].sort((a, b) => a - b)
			: state.pages_loaded

		return {
			...state,
			...remaining,
			pages_loaded,
		}
	}

	return state
}

export const isRefreshing = (actionPayloadProp: string = 'isRefreshing') => (state: Object, action: Object): Boolean => action.payload[actionPayloadProp]

export const lastUpdated = () => (state: Object, action: Object): Number => action.receivedAt
