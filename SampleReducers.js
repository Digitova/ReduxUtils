f// @flow
import GenericSchema from './GenericSchema'
import {eraseId, isRefreshing, lastUpdated, putEntities, putIds} from './ReducerFactories';
import {combineReducers} from 'redux';
import createReducer from "./createReducer";


const idsReducer = createReducer([], {
    ['PUT_SOME_ENTIPTY']: putIds('entities', GenericSchema),
})

const entitiesReducer = createReducer({}, {
    ['PUT_SOME_ENTIPTY']: putEntities('entities', GenericSchema),
})

const isRefreshingReducer = createReducer(false, {
    ['SOME_ENTITY_IS_REFRESHING']: isRefreshing()
})

const deleteReducer = createReducer(false, {
    ['SOME_ENTITY_DELETED']: eraseId()
})

const lastUpdatedReducer = createReducer('never', {
    ['PUT_SOME_ENTIPTY']: lastUpdated(),
    ['SOME_ENTITY_DELETED']: lastUpdated()
})

export const authentication = combineReducers({
    result: idsReducer,
    entities: entitiesReducer,
    deleteEntity: deleteReducer,
    isRefreshing: isRefreshingReducer,
    lastUpdated: lastUpdatedReducer
})