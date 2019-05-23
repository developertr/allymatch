import * as React from 'react'
import { Route, IndexRoute } from 'react-router'
import EventsPage from './components/EventsPage'

const EventsRoutes = (
  <Route path="/">
  <Route path="events">
    <IndexRoute component={EventsPage} />
  </Route>
  </Route>
)

export default EventsRoutes
