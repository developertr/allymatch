import * as React from 'react'
import { Route, IndexRoute } from 'react-router'
import OurStoryPage from './components/OurStoryPage'

const OurStoryRoutes = (
  <Route path="/">
  <Route path="ourStory">
    <IndexRoute component={OurStoryPage} />
  </Route>
  </Route>
)

export default OurStoryRoutes
