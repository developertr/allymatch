import * as React from 'react'
import { Route, IndexRoute } from 'react-router'
import SentRequestsPage from './components/SentRequestsPage'
import MatchesPage from './components/MatchesPage'
import ReceivedRequestsPage from './components/ReceivedRequestsPage'

const MatchesRoutes = (

  <Route path="/">
    <Route path="my_matches">
    <IndexRoute component={MatchesPage} />
    </Route>
    <Route path="sent_requests">
    <IndexRoute component={SentRequestsPage} />
    </Route>
    <Route path="received_requests">
    <IndexRoute component={ReceivedRequestsPage} />
    </Route>
  </Route>
)

export default MatchesRoutes
