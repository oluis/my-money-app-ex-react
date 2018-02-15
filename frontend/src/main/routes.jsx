import React from 'react'
import {Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router'

//import Dashboard from '../dashboard/dashboard'
import App from './app'
import Dashboard from '../dashboard2/dashboardSemRedux2'
import BillingCycle from '../billingCycle/billingCycle'
import AuthOrApp from './authOrApp'
import Usuario from '../usuario/listUsuario'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={AuthOrApp}>
      <IndexRoute component={Dashboard} />
      <Route path='billingCycles' component={BillingCycle} />
      <Route path='usuarios' component={Usuario} />
    </Route>
    <Redirect from='*' to='/' />
  </Router>

)
