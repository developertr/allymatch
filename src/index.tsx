import 'whatwg-fetch'

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer, Provider } from 'mobx-react';
import { Route, IndexRoute, Router, hashHistory } from 'react-router'
import DevTools from 'mobx-react-devtools';
import { About, BaseStore, MainLayout, SubLayout, BaseRoutes } from './base'
import { CounterStore, CounterRoutes } from './counter'
import { LoginStore, LoginRoutes } from './login'
import { PersonStore, PersonRoutes } from './profile'
import { CriteriaStore, CriteriaRoutes } from './criteria'
import { MatchesRoutes, MatchesStore, SentRequestsStore, ReceivedRequestsStore } from './matches'
import { RegistrationRoutes, RegistrationStore } from './register'
import { LandingPageRoutes } from './landingPage'
import { FetchClient, Interceptor } from 'intercept-fetch'
import { JobsRoutes } from './JobsPage'
import { EventsRoutes } from './Events'
import { PressRoutes } from './Press'
import { OurStoryRoutes } from './OurStory'

const interceptor = new Interceptor({

  cors: {
        id: 0,
        request(url, config) {
            if (typeof url === "string" && /api\//.test(url)) {
                url = "" + (url.startsWith("/") ? url : ("/" + url))
            }
            config.mode = 'cors'
            return Promise.resolve([url, config])
        }
    }
    /*
      cors: {
          id: 0,
          request(url, config) {
              if (typeof url === "string" && /api\//.test(url)) {
                  url = "http://192.168.114.48:8000" + (url.startsWith("/") ? url : ("/" + url))
              }
              config.mode = 'cors'
              return Promise.resolve([url, config])
          }
      }*/
  });
const fetchClient = new FetchClient()
fetchClient.setInterceptors(interceptor)
export { fetchClient }

const initialState = window['initialState'] || {
    drawerActive: false,
    counter: 0
}

const baseStore: BaseStore = BaseStore.fromJS(initialState.drawerActive)
const counterStore: CounterStore = CounterStore.fromJS(initialState.counter)
const loginStore: LoginStore = LoginStore.fromJS(initialState.todos || {})
const personStore: PersonStore = PersonStore.fromJS(initialState)
const criteriaStore: CriteriaStore = CriteriaStore.fromJS(initialState)
const matchesStore: MatchesStore = MatchesStore.fromJS(initialState)
const registrationStore: RegistrationStore = RegistrationStore.fromJS(initialState)
const sentRequestsStore: SentRequestsStore = SentRequestsStore.fromJS(initialState)
const receivedRequestsStore: ReceivedRequestsStore = ReceivedRequestsStore.fromJS(initialState)
const stores = {
    baseStore,
    counterStore,
    loginStore,
    personStore,
    criteriaStore,
    matchesStore,
    registrationStore,
    sentRequestsStore,
    receivedRequestsStore
}

ReactDOM.render(
    <Provider {...stores}>
        <Router history={hashHistory}>
            <Route path="/" component={MainLayout}>
                {LoginRoutes}
                <Route path="/" component={SubLayout}>
                    {CounterRoutes}
                    {MatchesRoutes}
                    {CriteriaRoutes}

                </Route>

                {OurStoryRoutes}
                {PressRoutes}
                {EventsRoutes}
                {JobsRoutes}

                {PersonRoutes}
                {RegistrationRoutes}
                {LandingPageRoutes}
                {BaseRoutes}
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root')
);
