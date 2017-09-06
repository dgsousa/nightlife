const yelp = require("yelp-fusion");
const client = yelp.client("hBg60B0uCpTv9QKHx9xTU5cL2WegPNBjqnhGZ3VUjDUDRIvffXk1QlhpzGomgJpIjimbByN0YBgYYu3Qyw0gPyXnfGKNuIF7XF0-JKYXX3EJRn3NofrHy4l4pLeLWXYx")
const bcrypt = require("bcrypt");

const setDestinationActionListener = database => data => {
	const {key, destination} = data;
	database.ref(`/members/${key}`).transaction(state => ({...state, destination}));
}


const searchEventListener = socket => async data => {
	try {
		let results = await client.search(data);
		results = results.jsonBody.businesses;
		socket.emit("data", {
			type: "GET_RESULTS",
			results
		});
	} catch(err) {
		socket.emit("error", err);
	}
}

const signUpActionListener = (socket, database) => async data => {
	const {username, password} = data;
	const hash = await bcrypt.hash(password, 10);
	const key = database.ref("/members/").push({
		username,
		password: hash
	}).key
	key && socket.emit("data", {
		type: "LOGIN",
		username,
		key
	})
}

const loginActionListener = (socket, database) => async data => {
	const {username, key, password} = data;
	const snap = await database.ref(`/members/${key}`).once("value");
	const userPassword = snap.val() && snap.val().password;
	bcrypt.compare(password, userPassword, (err, result) => {
		if(err) console.log(err);
		result && socket.emit("data", {type: "LOGIN", username, key});
	})
}


module.exports = {
	setDestinationActionListener,
	searchEventListener,
	signUpActionListener,
	loginActionListener
};