import { FORM_DETAILS, LOGIN_URL, LOGIN_FORM_FIELDS } from './actionConstants'

export const getFormDetails = () => disptach => {
  disptach({
    type: FORM_DETAILS,
    payload: {
      url: LOGIN_URL, 
      formFields: LOGIN_FORM_FIELDS
    }
  })
}