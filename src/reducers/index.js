import { combineReducers } from 'redux'
import HobbieReducer from './hobbie-reducer'

const rootReducer = combineReducers ({
  data: HobbieReducer
})

export default rootReducer