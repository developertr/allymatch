import * as React from 'react'
import { Route, IndexRoute } from 'react-router'
import RegistrationPage from './components/RegistrationPage'
import TermsConditions from './components/TermsConditions'
import PrivacyPolicy from './components/PrivacyPolicy'
import ContactImprint from './components/ContactImprint'
import RegistrationUserEvent from './components/RegistrationUserEvent'
import RegistrationEvent from './components/RegistrationEvent'
import TermsConditionsEvent from './components/TermsConditionsEvent'
import ActivateUser from './components/ActivateUser'

const RegistrationRoutes = (

  <Route path="/">
  <Route path="register">
    <IndexRoute component={RegistrationPage} />
  </Route>
  <Route path="termsConditions">
    <IndexRoute component={TermsConditions} />
  </Route>
  <Route path="privacyPolicy">
      <IndexRoute component={PrivacyPolicy} />
  </Route>
  <Route path="tncEvent">
    <IndexRoute component={TermsConditionsEvent} />
  </Route>
  <Route path="contactImprint">
    <IndexRoute component={ContactImprint} />
  </Route>
  {/* <Route path="registerUserEvent">
    <IndexRoute component={RegistrationUserEvent} />
  </Route>
  <Route path="registerEvent">
    <IndexRoute component={RegistrationEvent} />
  </Route>
  <Route path="activateEventUser">
    <IndexRoute component={ActivateUser} />
  </Route> */}
  </Route>
)

export default RegistrationRoutes
