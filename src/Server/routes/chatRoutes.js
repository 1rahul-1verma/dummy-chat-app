const express = require("express"),
  chatRoutes = express.Router();

const { ChatController } = require("../controller/ChatController");
const chatController = new ChatController();

chatRoutes.use(express.json());

chatRoutes.get("/", (req, res) => {
  console.log("here");
  chatController
    .getChats()
    .then((data) => {
      console.log(data);
      res.end(JSON.stringify(data));
    })
    .catch((err) => res.end(err.toString()));
});

chatRoutes.get("/id", (req, res) => {
  const userId = req.query.chatId;
  chatController
    .getChatById(userId)
    .then((data) => {
      res.end(JSON.stringify(data));
    })
    .catch((err) => res.end(err.toString()));
});


module.exports = { chatRoutes };