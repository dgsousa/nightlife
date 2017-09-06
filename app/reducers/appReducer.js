//import { combineReducers } from "redux";
import {Map} from "immutable";


function login(state, action) {
	return state.set("username", action.username = null)
				.set("key", action.key = null);
}

function error(state, action) {
	return state.set("message", action.message = null);
}

function getResults(state, action) {
	return state.set("results", action.results);
}

function updateMember(state, action) {
	return state.updateIn(["members", action.key, "username"], 0, username => action.username)
				.updateIn(["members", action.key, "destination"], 0, destination => action.destination);
	
}


export default (state = Map(), action) => {
	switch(action.type) {
	case "LOGIN":
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



