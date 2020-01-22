import React from 'react'
import AppContainer from './components/AppContainer'
import configureStore from './reduxStore'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

const store = configureStore()

function App(){
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <AppContainer />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
