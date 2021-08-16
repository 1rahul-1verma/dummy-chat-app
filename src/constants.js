const ROOT_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3131/"
    : "https://chat-server-dummy-app.herokuapp.com/";
const MESSAGE_FILE =
  "/Users/rahul/Desktop/Practice/dummy-chat/src/Server/message.json";
const USER_FILE =
  "/Users/rahul/Desktop/Practice/dummy-chat/src/Server/user.json";
const CHAT_FILE =
  "/Users/rahul/Desktop/Practice/dummy-chat/src/Server/chat.json";
const BASE_URL = "http://localhost:3001";
module.exports = { ROOT_URL, MESSAGE_FILE, USER_FILE, CHAT_FILE, BASE_URL };
