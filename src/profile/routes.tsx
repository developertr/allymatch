import * as React from 'react'
import {Route, IndexRoute} from 'react-router'
import CreateProfile from './components/CreateProfile'
import ViewProfile from './components/ViewProfile'
import EditProfile from './components/EditProfile'

const PersonRoutes = (
  <Route path="/">
    <Route path="create_profile">
    <IndexRoute component={CreateProfile} />
    </Route>
    <Route path="my_profile">
    <IndexRoute component={ViewProfile} />
    </Route>
    <Route path="edit_profile">
    <IndexRoute component={EditProfile} />
    </Route>
  </Route>
)

export default PersonRoutes
