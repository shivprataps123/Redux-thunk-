import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { legacy_createStore,applyMiddleware,compose,combineReducers } from "redux";
import thunk from 'redux-thunk';

const rootReducer=combineReducers({
  AuthReducer,
  AppReducer,
})
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// NOTE: use this store variable to create a store.
const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
