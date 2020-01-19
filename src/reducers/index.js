import { combineReducers } from 'redux'
function rootReducer(state={}, action) {
  return 2
}
export default combineReducers({
  test: rootReducer
})