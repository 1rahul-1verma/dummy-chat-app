const express = require("express"),
  chatRoutes = express.Router();

const { ChatController } = require("../controller/ChatController");
const chatController = new ChatController();

chatRoutes.use(express.json());

chatRoutes.get("/", (req, res) => {
  chatController
    .getChats()
    .then((data) => {
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

chatRoutes.post("/id", (req, res) => {
  const payload = req.body;
  chatController.addNewMessageInChat(payload)
    .then((data) => {
      res.end(JSON.stringify(data));
    })
    .catch((err) => res.end(err.toString()));
});

chatRoutes.post("/new", (req, res) => {
  console.log("here");
  const payload = req.body;
  chatController.addNewChatRoom(payload)
    .then((data) => {
      res.end(JSON.stringify(data));
    })
    .catch((err) => res.end(err.toString()));
});

chatRoutes.post("/newUser", (req, res) => {
  const payload = req.body;
  chatController.addNewMember(payload)
    .then((data) => {
      res.end(JSON.stringify(data));
    })
    .catch((err) => res.end(err.toString()));
});

module.exports = { chatRoutes };
