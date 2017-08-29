import { combineReducers } from "redux";




const userReducer = (state = null, action) => {
	switch(action.type) {
	case "SIGN_IN":
		return action.user
	case "SIGN_OUT":
		return null;
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



const loadingReducer = (state = true, action) => {
	switch(action.type) {
	case "LOADING":
		return false;
	}
	return state;
}


const membersReducer = (state = {}, action) => {
	switch(action.type) {
	case "SET_DESTINATION": 
		return {
			...state,
			[action.user]: action.destination
		}
	}
	return state;
}



const appReducer = combineReducers({
	user: userReducer,
	loading: loadingReducer,
	members: membersReducer,
	results: resultsReducer
});




export default appReducer;