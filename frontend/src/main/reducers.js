import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer';
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import AuthReducer from '../auth/authReducer.js'
import UsuarioReducer from '../usuario/usuarioReducer.js'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer,
    usuario: UsuarioReducer
})

export default rootReducer
