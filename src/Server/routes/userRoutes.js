const express = require("express"),
  userRoutes = express.Router();

const { UserController } = require("../controller/UserController.js");
const userController = new UserController();

userRoutes.use(express.json());

userRoutes.get("/", (req, res) => {
  console.log("here");
  userController
    .getUsers()
    .then((data) => {
      console.log(data);
      res.end(JSON.stringify(data));
    })
    .catch((err) => res.end(err.toString()));
});

userRoutes.get("/id", (req, res) => {
  console.log(req.query);
  const userId = req.query.userId;
  userController
    .getUserById(userId)
    .then((data) => {
      console.log(typeof data);
      res.end(JSON.stringify(data));
    })
    .catch((err) => res.end(err.toString()));
});

module.exports = { userRoutes };
