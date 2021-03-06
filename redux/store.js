import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducers from "./rootReducer";
export default createStore(rootReducers, applyMiddleware(thunkMiddleware));
