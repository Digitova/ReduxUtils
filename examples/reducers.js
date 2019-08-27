import {combineReducers} from 'redux'
import * as PlaceholderReducer from './SampleReducers'


export default combineReducers(Object.assign(
    PlaceholderReducer,
    // ... other reducers
))
