import { 
  LOGIN_FORM_DETAILS, 
  LOGIN_URL, 
  LOGIN_TYPE,
  LOGIN_FORM_FIELDS,  
  BLOG_FORM_FIELDS,
  BLOG_FORM_DETAILS,
  CREATE_BLOG,
  CREATE_BLOG_URL,
  REGISTER_FORM_FIELDS,
  REGISTER_URL,
  REGISTER_TYPE,
  REGISTER
} from './actionConstants'

export const getFormDetails = () => disptach => {
  disptach({
    type: LOGIN_FORM_DETAILS,
    payload: {
        login: {
          url: LOGIN_URL, 
          type: LOGIN_TYPE
        },
      loginFormFields: LOGIN_FORM_FIELDS
    }
  })
}

export const getBlogFormDetails = () => dispatch => {
  dispatch({
    type: BLOG_FORM_DETAILS,
    payload: {
      blog: {
        url: CREATE_BLOG_URL, 
        type: CREATE_BLOG
      },
      blogFormFields: BLOG_FORM_FIELDS
    }
  })
}

export const getRegisterDetails = () => dispatch => {
  dispatch({
    type: REGISTER,
    payload: {
      url: REGISTER_URL,
      type: REGISTER_TYPE,
      registerFormDetails: REGISTER_FORM_FIELDS 
    }
  })
}