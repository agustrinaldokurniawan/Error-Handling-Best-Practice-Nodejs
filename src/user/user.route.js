const express = require("express");
const UserController = require("./user.controller");
const route = express.Router();

route.get("/", UserController.getUsers);

module.exports = route;
