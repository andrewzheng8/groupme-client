import { combineReducers } from 'redux'

import {authReducer as auth} from './auth_reducer'
import {menuReducer as menu} from './menu_reducer'

const rootReducer = combineReducers({
  auth,
  menu
})

export default rootReducer
