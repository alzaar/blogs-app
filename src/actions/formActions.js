import { LOGIN_FORM_DETAILS, LOGIN_URL, LOGIN_FORM_FIELDS, 
  BLOG_FORM_DETAILS, BLOG_URL, BLOG_FORM_FIELDS, LOGIN_TYPE,
  BLOG_TYPE
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
        url: BLOG_URL, 
        type: BLOG_TYPE
      },
      blogFormFields: BLOG_FORM_FIELDS
    }
  })
}