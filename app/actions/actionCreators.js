import axios from "axios";


export const setDestination = (e) => (dispatch, getState, socket) => {
	const destination = e.target.value;
	const {user} = getState();
	user && socket.emit("setDestination", {user, destination})
}


export const getResults = (location, term, keyword) => (dispatch, getState, socket) => {
	socket.emit("search", {location, term});
}