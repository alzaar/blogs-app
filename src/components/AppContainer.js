import React from 'react'
import Form from './Form'
import { LOGIN_URL, LOGIN_FORM_FIELDS } from '../config/constants'

function AppContainer(){
  return (
    <div>
      <Form formFieldsDetails={LOGIN_FORM_FIELDS} url={LOGIN_URL}/>
    </div>
  );
}

export default AppContainer
