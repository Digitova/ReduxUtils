# ReduxUtils

### arrayify
Arrayify is a simple utility that checks to see if the data passed to it is an array.  If the data is an array it returns the data as is.  If the data is not an array it returns the data wrapped in an array.  If the data is null or undefined it returns an empty array.

Usage: 

    import {arrayify} from ReduxUtils
    
    const car = {
        make: 'Toyota'
        model: 'Tacoma'
        year: 2015
    }

    const cars = arrayify(car)      // cars is an array [car]
    const cars2 = arrayify([car])    // cars2 is an array [car]
    const cars3 = arrayify(null)     // cars3 is an empty array []
       

### createReducer
createReducer is a simple function that is a part of lots of redux libraries.  It simplifies the boilerplate for creating reducers.

Usage:

    import {createReducer} from ReduxUtils
    
    const carReducer = createReducer({}, {
      ['PUT_CAR']: (state, action) => action.payload.car,
    })


### ReducerFactories
ReducerFactories are a powerful state normalization abstraction that really allows you to create very clean and simple reducers.  The reducer factories use normalizr to normalize the data and simplify the boilerplate needed to put list data into redux.


#### putIds
This function puts the normalized IDs into the state as an array

    putIds (payloadEntityName: string, schema: Object)
    
    const exampleAction = {
        type: 'PUT_ENTITIES',
        payload: { entities },
        receivedAt: Date.now()
    }
   
#### putEntities
This function puts the normalized entity objects into the state as an array

    putEntities(payloadEntityName: string, schema: Object)
    
    const exampleAction = {
        type: 'PUT_ENTITIES',
        payload: { entities },
        receivedAt: Date.now()
    }
   
#### eraseAllIds
This function wipes out the ids array from the state essentially deleting the normalized data
    
    eraseAllIds()
    
    const exampleAction = {
        type: 'DELETE_ALL_ENTITIES',
        receivedAt: Date.now()
    }
        
#### eraseId
This function eliminates a single ID from the normalized IDs array.  It assumes the ID you want exists as a property on the action payload (action.payload.id)
    
    eraseId() // assumes id is in the action payload.
    
    const exampleAction = {
        type: 'DELETE_ENTITY',
        payload: { 
            id: 32 
        },
        receivedAt: Date.now()
    }
  
#### isRefreshing
This function can be used to update an isRefreshing flag for the data set.  It assumes the isRefreshing property exists on the action payload.
    
    isRefreshing()
    
    const exampleAction = {
        type: 'SET_IS_REFRESHING',
        payload: { 
            isRefreshing: true 
        },
        receivedAt: Date.now()
    }
    
#### lastUpdated
This function sets a timestamp for the last time a data element was updated.  It is looking for the receivedAt property on the action.
   
    lastUpdated() // pulls time from action.receivedAt
    
    const exampleAction = {
        type: 'PUT_ENTITIES',
        receivedAt: Date.now()
    }

See the following example reducer that uses these factories:

    import { 
        putIds,
        putEntities, 
        eraseAllIds, 
        eraseId, 
        isRefreshing, 
        lastUpdated, 
        createReducer,
        GenericSchema
    } from ReduxUtils
    
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
    

### GenericSchema

### NormalizedCollection



Redux Utils is a few redux utilities that I created/co-created with @callmetwan (Anthony Garritano)

