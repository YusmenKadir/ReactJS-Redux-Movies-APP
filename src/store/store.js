import { moviesReducer } from "./reducers";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers, applyMiddleware } from "redux";

const rootReducer = combineReducers({
  moviesReducer,
});

 const store = createStore(rootReducer, applyMiddleware(thunk));

 export default store; 
