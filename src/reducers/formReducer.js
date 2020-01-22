import { LOGIN_FORM_DETAILS, BLOG_FORM_DETAILS } from '../actions/actionConstants'

const initialState = {
  loginUrl: '',
  loginFormFieldsDetails: [],
  blogUrl: '',
  blogFormFieldsDetails: [],
}

export default function formReducer(state=initialState, action) {
  switch(action.type) {
    case LOGIN_FORM_DETAILS:
      return {
        ...state,
        loginUrl: action.payload.loginUrl,
        loginFormFieldsDetails: action.payload.loginFormFields
      }
    case BLOG_FORM_DETAILS:
      return {
        ...state,
        blogUrl: action.payload.loginUrl,
        blogFormFieldsDetails: action.payload.loginFormFields
      }
    default:
      return state
  }
}