import React from 'react'
import AppContainer from './components/AppContainer'
import configureStore from './reduxStore'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const store = configureStore()

function App(){
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' component={AppContainer} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
