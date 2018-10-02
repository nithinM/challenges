import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import charitiesReducer from "../reducers/charities";
import donationsReducer from "../reducers/donations";
import alertReducer from "../reducers/alert";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
// Store Creation
export default () =>
  createStore(
    combineReducers({
      charities: charitiesReducer,
      donations: donationsReducer,
      alert: alertReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
