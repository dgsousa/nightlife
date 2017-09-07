import axios from "axios";


export const setDestination = (e) => (dispatch, getState, socket) => {
	const destination = e.target.value;
	const {key} = getState();
	key && socket.emit("setDestination", {key, destination})
}

export const getResults = (location, term, keyword) => (dispatch, getState, socket) =>
	socket.emit("search", {location, term});

export const createAccount = (username, password) => (dispatch, getState, socket) => {
	const {members} = getState().toJS();
	isUnique(username, members) && socket.emit("signUp", {username, password});
}

export const login = (username, password) => (dispatch, getState, socket) => {
	const {members} = getState().toJS();
	const key = getKey(username, members);
	key && socket.emit("login", {username, key, password});
}

export const logout = () => (dispatch, getState) =>	dispatch({type: "LOGOUT"});

const isUnique = (username, members) => 
	Object.keys(members).every(member => members[member].username !== username)


const getKey = (username, members) =>
	Object.keys(members).reduce((prev, curr) => {
		return members[curr].username === username ? curr : prev
	}, 0)

