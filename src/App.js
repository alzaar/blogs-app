import React from 'react'
import axios from 'axios'
import './App.css'
import LoginForm from './components/LoginForm'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

function App(){
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default App;
