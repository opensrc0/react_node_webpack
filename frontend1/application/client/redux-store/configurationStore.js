import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../rootReducer";

const createStoreWithMiddleware = compose(
	applyMiddleware(thunkMiddleware)
)(createStore);

