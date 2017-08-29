"use strict";

const express = require("express");
const app = express();
const server = require("http").createServer(app);
const path = require("path");
const index = path.join(__dirname + "/views/index.ejs");
const parser = require("body-parser").json();
const database = require("./database");
const session = require("express-session");
const socketServer = require("./socket/socket_server.js");

app.use(parser);

app.use("/static", express.static("public"));

app.set("view engine", "ejs");


app.use("/", (req, res) => res.render(index));


server.listen(3000);


socketServer(server, database);

