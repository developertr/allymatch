import * as React from 'react'
import { Route, IndexRoute } from 'react-router'
import LoginPage from './components/LoginPage'

const LoginRoutes = (
  <Route path="login">
    <IndexRoute component={LoginPage} />
  </Route>
)

export default LoginRoutes
