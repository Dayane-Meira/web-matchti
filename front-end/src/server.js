const express = require("express");
const server = express();
const routes = require("./routes");

server.use(express.static("public"));

server.use(routes);
server.listen('3098', console.log('servidor rodando'));