import {combineReducers} from 'redux'
import filterReducer from './filterReducer'
import phonesReducer from './phonesReducers'

const rootReducer = combineReducers({
    phones: phonesReducer,
    filter: filterReducer,
})

export default rootReducer