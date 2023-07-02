import {Route, Switch} from 'react-router-dom'
import {useEffect} from 'react'
import {gapi} from 'gapi-script'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'

import './App.css'

const clientId =
  '208905205974-gn2b432fqii70pv7fhghmrua37at57vp.apps.googleusercontent.com'

const App = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId,
        scope: '',
      })
    }
    gapi.load('client:auth2', start)
  })

  return (
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/Dashboard" component={Dashboard} />
    </Switch>
  )
}

export default App
