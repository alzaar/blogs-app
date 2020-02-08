import { LOGIN_FORM_DETAILS, BLOG_FORM_DETAILS, VIEW_BLOGS,
  REGISTER
} from '../actions/actionConstants'

const initialState = {
  login: {
    url: '',
    type: ''
  },
  loginFormFieldsDetails: [],
  blog: {
    url: '',
    type: ''
  },
  blogFormFieldsDetails: [],
  register: {
    url: '',
    type: '',
    registerFormDetails: []
  }
}

export default function formReducer(state=initialState, action) {
  switch(action.type) {
    case LOGIN_FORM_DETAILS:
      return {
        ...state,
        login: action.payload.login,
        loginFormFieldsDetails: action.payload.loginFormFields
      }
    case BLOG_FORM_DETAILS:
      return {
        ...state,
        blog: action.payload.blog,
        blogFormFieldsDetails: action.payload.blogFormFields
      }
    case REGISTER:
      return {
        ...state,
        register: {
          url: action.payload.url,
          type: action.payload.type,
          registerFormDetails: action.payload.registerFormDetails
        }
      }
    default:
      return state
  }
}