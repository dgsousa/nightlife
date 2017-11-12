//import { combineReducers } from "redux";
import {Map} from "immutable";



const login = (state, action) => {
	return state.set("username", action.username || null)
							.set("key", action.key || null);
	
}

const error = (state, action) =>
	state.set("message", action.message = null);

const getResults = (state, action) =>
	state.set("results", action.results);

const updateMember = (state, action) =>
	state.updateIn(["members", action.key, "username"], 0, username => action.username)
		.updateIn(["members", action.key, "destination"], 0, destination => action.destination);
	



export default (state = Map(), action) => {
	switch(action.type) {
	case "LOGIN":
		return login(state, action);
	case "LOGOUT":
		return login(state, action);
	case "GET_RESULTS":
		return getResults(state, action);
	case "UPDATE_MEMBER":
		return updateMember(state, action);
	case "ERROR":
		return error(state, action);
	}
	return state;
}



