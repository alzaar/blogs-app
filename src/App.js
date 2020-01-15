import React from 'react'
import './App.css'
import Form from './components/Form'
import { LOGIN_URL } from './config/constants'

function App(){
  return (
    <div>
      <Form url={LOGIN_URL} />
    </div>
  );
}

export default App;
