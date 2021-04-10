import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer } from '../redux/reducers/userReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { chatReducer } from './reducers/chatReducer';

//combine all reducers(States) into one reducer. add reducers & change their name if you want
const allReducers = combineReducers({
  user: userReducer,
  chat: chatReducer
})

const middlewares = [thunk]

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(...middlewares)))

export default store

