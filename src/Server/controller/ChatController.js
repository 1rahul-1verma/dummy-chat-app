const { readFile } = require("../Util/readFile");
const {CHAT_FILE} = require("../../constants");

class ChatController {
  constructor() {
    this.file = CHAT_FILE;
  }

    getChats() {
        console.log("chattsss");
    return new Promise(async (resolve, reject) => {
      try {
        const chatsJSON = await readFile(this.file);
          const chatData = JSON.parse(chatsJSON);
          console.log(chatsJSON, chatData);
        resolve(chatData);
      } catch (err) {
        reject({ ...err });
      }
    });
  }

  getChatById(chatId) {
    return new Promise(async (resolve, reject) => {
      try {
        const chatJSON = await readFile(this.file);
        const chat = JSON.parse(chatJSON);
        if (!Object.keys(chat).includes(chatId)) {
          reject({});
        }
        resolve(chat[chatId]);
      } catch (err) {
        reject({ ...err });
      }
    });
  }
}

module.exports = { ChatController };
