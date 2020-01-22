import { LOGIN_FORM_DETAILS, LOGIN_URL, LOGIN_FORM_FIELDS, 
  BLOG_FORM_DETAILS, BLOG_URL, BLOG_FORM_FIELDS
} from './actionConstants'

export const getFormDetails = () => disptach => {
  disptach({
    type: LOGIN_FORM_DETAILS,
    payload: {
      loginUrl: LOGIN_URL, 
      loginFormFields: LOGIN_FORM_FIELDS
    }
  })
}

export const getBlogFormDetails = () => dispatch => {
  dispatch({
    type: BLOG_FORM_DETAILS,
    payload: {
      blogUrl: BLOG_URL, 
      blogFormFields: BLOG_FORM_FIELDS
    }
  })
}