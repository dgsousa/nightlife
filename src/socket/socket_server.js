const socketIO = require("socket.io");
const {setDestinationActionListener, searchEventListener, signUpActionListener, loginActionListener} = require("../listeners/action_listeners");
const {updateMemberDatabaseListener} = require("../listeners/database_listeners");


const socketServer = (server, database) => {
	const io = socketIO.listen(server);

	io.on("connection", socket => {
		updateMemberDatabaseListener(socket, database);
		socket.on("signUp", signUpActionListener(socket, database));
		socket.on("login", loginActionListener(socket, database));
		socket.on("search", searchEventListener(io));
		socket.on("setDestination", setDestinationActionListener(database));
	})
}


module.exports = socketServer;