import { combineReducers } from 'redux'
import TabReducer from '../common/tab/tabReducer'
import billingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    tab: TabReducer,
    billingCycle: billingCycleReducer
})

export default rootReducer