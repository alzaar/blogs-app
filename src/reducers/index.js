import { combineReducers } from 'redux'
import formReducer from './formReducer'
import blogsReducer from './blogsReducer'

export default combineReducers({
  formReducer: formReducer,
  blogsReducer: blogsReducer
})