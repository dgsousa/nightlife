import { combineReducers } from "redux";


const usernameReducer = (state = null, action) => {
	switch(action.type) {
	case "SIGN_UP":
	case "LOGIN":
		return action.username
	case "LOGOUT":
		return null
	}
	return state;
}

const keyReducer = (state = null, action) => {
	switch(action.type) {
	case "SIGN_UP":
	case "LOGIN":
		return action.key
	case "LOGOUT":
		return null
	}
	return state;
}


const resultsReducer = (state = [], action) => {
	switch(action.type) {
	case "GET_RESULTS":
		return action.results;
	}
	return state;
}


const membersReducer = (state = {}, action) => {
	switch(action.type) {
	case "UPDATE_MEMBER": 
		return {
			...state,
			[action.key]: {
				username: action.username,
				destination: action.destination
			}
		}
	}
	return state;
}

const messageReducer = (state = null, action) => {
	switch(action.type) {
	case "ERROR":
		return action.message
	}
	return state;
}



const appReducer = combineReducers({
	username: usernameReducer,
	key: keyReducer,
	members: membersReducer,
	results: resultsReducer,
	message: messageReducer
});




export default appReducer;