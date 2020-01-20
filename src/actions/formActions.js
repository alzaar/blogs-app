import { LOGIN_URL, LOGIN_FORM_FIELDS } from '../config/constants'
import { FORM_DETAILS } from './constants.js'

export const getFormDetails = () => disptach => {
  disptach({
    type: FORM_DETAILS,
    payload: {
      url: LOGIN_URL, 
      formFields: LOGIN_FORM_FIELDS
    }
  })
}