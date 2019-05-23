import * as React from 'react'
import { Route, IndexRoute } from 'react-router'
import JobsPage from './components/JobsPage'
import CSMJobPage from './components/CSMJobPage'
import IYIJobPage from './components/IYIJobPage'
import MEJobPage from './components/MEJobPage'
import OtherJobPage from './components/OtherJobPage'
import PMSJobPage from './components/PMSJobPage'
import SDJobPage from './components/SDJobPage'

const JobsRoutes = (
  <Route path="/">
    <Route path="jobs">
      <IndexRoute component={JobsPage} />
    </Route>
    <Route path="sdJobs">
      <IndexRoute component={SDJobPage} />
    </Route>
    <Route path="meJobs">
      <IndexRoute component={MEJobPage} />
    </Route>
    <Route path="pmsJobs">
      <IndexRoute component={PMSJobPage} />
    </Route>
    <Route path="csmJobs">
      <IndexRoute component={CSMJobPage} />
    </Route>
    <Route path="iyiJobs">
      <IndexRoute component={IYIJobPage} />
    </Route>
    <Route path="otherJobs">
      <IndexRoute component={OtherJobPage} />
    </Route>
  </Route>
)

export default JobsRoutes
