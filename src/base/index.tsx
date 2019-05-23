import * as React from 'react'
import BaseStore from './store'
import MainLayout from './components/MainLayout'
import SubLayout from './components/SubLayout'
import ViewAllymatch from './components/ViewAllymatch'
import IRouterContext from './IRouterContext'
import { Route, IndexRoute } from 'react-router'
import NotFoundPage from './components/NotFoundPage'
import About from './components/About'

const BaseRoutes = (
  <Route path="/">
    {/*<IndexRoute component={About} />*/}
    <Route path="allymatchDetails">
      <IndexRoute component={ViewAllymatch} />
    </Route>
    <Route component={NotFoundPage} path="*" />
  </Route>
)
export { About, BaseStore, MainLayout, ViewAllymatch, SubLayout,IRouterContext, BaseRoutes }
