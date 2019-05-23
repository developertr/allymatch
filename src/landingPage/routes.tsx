import * as React from 'react'
import { Route, IndexRoute } from 'react-router'
import LandingPage from './components/LandingPage'

const LandingPageRoutes = (
  <Route path="">
    <IndexRoute component={LandingPage} />
  </Route>
)

export default LandingPageRoutes
