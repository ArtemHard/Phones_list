import { ADD_PHONE, DELETE_PHONE, SET_PHONES, UPDATE_PHONE } from "../types/phonesTypes";

const phonesReducer = (store = [], action) => {
     switch (action.type) {
        case SET_PHONES:
            return action.payload
        case DELETE_PHONE:
            return store.filter((phone) => phone.id !== action.payload)
        
        case UPDATE_PHONE:
            return store.length ?
            store.map((phone) => {
                if (phone.id === action.payload.id) {
                    return action.payload
                }

                return phone
            }) : [action.payload]
        case ADD_PHONE:
            return [...store, action.payload]

        default:
            return store
     }
}

export default phonesReducer