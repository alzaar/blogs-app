import { FORM_DETAILS } from '../actions/actionConstants'

const initialState = {
  url: '',
  formFieldsDetails: [],
}

export default function formReducer(state=initialState, action) {
  switch(action.type) {
    case FORM_DETAILS:
      return {
        url: action.payload.url,
        formFieldsDetails: action.payload.formFields
      }
    default:
      return state
  }
}