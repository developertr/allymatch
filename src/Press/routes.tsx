import * as React from 'react'
import { Route, IndexRoute } from 'react-router'
import PressPage from './components/PressPage'

const PressRoutes = (
  <Route path="/">
  <Route path="press">
    <IndexRoute component={PressPage} />
  </Route>
  </Route>
)

export default PressRoutes
