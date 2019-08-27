# ReduxUtils

### Arrayify
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

### ReducerFactories

### GenericSchema

### NormalizedCollection



Redux Utils is a few redux utilities that I created/co-created with @callmetwan (Anthony Garritano)

