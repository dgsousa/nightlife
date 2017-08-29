const socketIO = require("socket.io");
const config = require("../database/client_key.js");
const {setDestinationActionListener, searchEventListener, signInActionListener} = require("../listeners/action_listeners");
const {setDestinationDatabaseListener} = require("../listeners/database_listeners");


const socketServer = (server, database) => {
	const io = socketIO.listen(server);

	io.on("connection", socket => {
		socket.emit("config", config);
		setDestinationDatabaseListener(io, database);
		socket.on("signIn", signInActionListener(io, database));
		socket.on("search", searchEventListener(io));
		socket.on("setDestination", setDestinationActionListener(database));
	})
}


module.exports = socketServer;