import { combineReducers } from 'redux'

import {authReducer as auth} from './auth_reducer'
import {menuReducer as menu} from './menu_reducer'
import {contactsReducer as contacts} from './contacts_reducer'

const rootReducer = combineReducers({
  auth,
  menu,
  contacts
})

export default rootReducer
