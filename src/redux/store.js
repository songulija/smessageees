import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer } from '../redux/reducers/userReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

//combine all reducers(States) into one reducer. add reducers & change their name if you want
const allReducers = combineReducers({
  user: userReducer
})

const middlewares = [thunk]

export const store = createStore(allReducers, composeWithDevTools(applyMiddleware(...middlewares)))


