"use strict";
require("babel-core/register")({
	"presets": ["es2015", "react", "stage-1"]
})
require("babel-polyfill");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const path = require("path");
const index = path.join(__dirname + "/views/index.ejs");
const parser = require("body-parser").json();
const database = require("./database");
const session = require("express-session");
const socketServer = require("./socket/socket_server.js");
const handleRender = require("./handleRender");

app.use(parser);

app.use("/static", express.static("public"));

app.set("view engine", "ejs");


app.use("/", handleRender(index, database));


server.listen(3000);


socketServer(server, database);

