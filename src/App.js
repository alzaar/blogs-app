import React from 'react'
import AppContainer from './components/AppContainer'
import configureStore from './reduxStore'
import { Provider } from 'react-redux'

const store = configureStore({})

function App(){
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
