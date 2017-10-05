import { combineReducers } from 'redux'

import {authReducer as auth} from './auth_reducer'
import {menuReducer as menu} from './menu_reducer'
import {contactsReducer as contacts} from './contacts_reducer'
import {viewerReducer as viewer} from './viewer_reducer'

const rootReducer = combineReducers({
  auth,
  menu,
  contacts,
  viewer
})

export default rootReducer
