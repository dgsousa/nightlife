import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import appReducer from "../reducers/appReducer.js";



const createStoreWithMiddlewareAndSocket = (socket) =>
	compose(
		applyMiddleware(thunk.withExtraArgument(socket)), 
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)(createStore)(appReducer);



export default createStoreWithMiddlewareAndSocket;