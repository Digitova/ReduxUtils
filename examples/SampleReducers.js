// @flow
import {combineReducers} from 'redux';
import GenericSchema from '../schema/GenericSchema'
import {eraseId, isRefreshing, lastUpdated, putEntities, putIds} from '../reducers/ReducerFactories';
import createReducer from "../reducers/createReducer";


const idsReducer = createReducer([], {
    ['PUT_SOME_ENTITY']: putIds('entities', GenericSchema),
})

const entitiesReducer = createReducer({}, {
    ['PUT_SOME_ENTITY']: putEntities('entities', GenericSchema),
})

const isRefreshingReducer = createReducer(false, {
    ['SOME_ENTITY_IS_REFRESHING']: isRefreshing()
})

const deleteReducer = createReducer(false, {
    ['SOME_ENTITY_DELETED']: eraseId()
})

const lastUpdatedReducer = createReducer('never', {
    ['PUT_SOME_ENTITY']: lastUpdated(),
    ['SOME_ENTITY_DELETED']: lastUpdated()
})

export const sampleStateEntry = combineReducers({
    result: idsReducer,
    entities: entitiesReducer,
    deleteEntity: deleteReducer,
    isRefreshing: isRefreshingReducer,
    lastUpdated: lastUpdatedReducer
})
