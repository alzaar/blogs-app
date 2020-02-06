import { combineReducers } from 'redux'
import formReducer from './formReducer'
import blogsReducer from './blogsReducer'
import userReducer from './userReducer'

export default combineReducers({
  formReducer: formReducer,
  blogsReducer: blogsReducer,
  userReducer: userReducer
})