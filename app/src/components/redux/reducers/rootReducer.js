import {combineReducers} from 'redux'
import phonesReducer from './phonesReducers'

const rootReducer = combineReducers({
    phones: phonesReducer
})

export default rootReducer