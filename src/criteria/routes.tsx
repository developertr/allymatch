import * as React from 'react'
import { Route, IndexRoute } from 'react-router'
import CriteriaPage from './components/CriteriaPage'

const CriteriaRoutes = (
  <Route path="my_inquiries">
    <IndexRoute component={CriteriaPage} />
  </Route>
)

export default CriteriaRoutes
