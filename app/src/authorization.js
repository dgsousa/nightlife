import * as firebase from "firebase";


export const redirectToLogin = () => {
	const provider = new firebase.auth.GithubAuthProvider();
	firebase.auth().signInWithRedirect(provider);
}


export const getCredentials = async (store, config, socket) => {
	const {dispatch} = store;
	firebase.initializeApp(config);
	try {
		const result = await firebase.auth().getRedirectResult();
		const user = result.user && result.user.displayName || null;
		socket.emit("signIn", user);
		sessionStorage.setItem("user", user);
		console.log(user);

	} catch(err) {
		console.log("error", err.message);
	}
	dispatch({type: "LOADING", loading: false});
}

export const signOut = () => async (dispatch) => {
	try {
		await firebase.auth().signOut();
		dispatch({type: "SIGN_OUT"});
	} catch(err) {
		console.log(err.message);
	}
}