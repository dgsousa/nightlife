import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import thunk from "redux-thunk";
import App from "./components/App.jsx";
import io from "socket.io-client";
import {getCredentials} from "./src/authorization.js";
import firebase from "firebase";
import createStoreWithMiddlewareAndSocket from "./src/store";


const socket = io();

const store = createStoreWithMiddlewareAndSocket(socket);


socket.on("config", config => {
	getCredentials(store, config, socket);
	socket.on("data", store.dispatch);
})




ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, 
	document.getElementById("app")
);






