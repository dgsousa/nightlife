import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import appReducer from "../reducers/appReducer.js";

const initialState = window.INITIAL_STATE;

const createStoreWithMiddlewareAndSocket = (socket) =>
	createStore(
		appReducer,
		initialState,
		compose(
			applyMiddleware(thunk.withExtraArgument(socket)), 
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);



export default createStoreWithMiddlewareAndSocket;