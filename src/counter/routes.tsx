import * as React from 'react'
import {Route, IndexRoute} from 'react-router'

import CounterBase from './components/CounterBase'
import CounterPage from './components/CounterPage'

const counterRoutes = (
  <Route path="counter" component={CounterBase}>
    <IndexRoute component={CounterPage} />
  </Route>
)

export default counterRoutes
