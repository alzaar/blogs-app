import { USER_LOGIN } from '../actions/actionConstants'

const initialState = {
    authtenticated: false,
}

export default function userReducer(state=initialState, action) {
    switch(action.type) {
        case USER_LOGIN:
            return {
                authtenticated: action.payload.authtenticated
            }
        default:
            return state
    }
}
