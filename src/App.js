import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'

// import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={LoginForm} />
    <Route exact path="/Dashboard" component={Dashboard} />
  </Switch>
)

export default App
