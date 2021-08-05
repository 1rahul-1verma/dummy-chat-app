const { readFile } = require("../Util/readFile");
const { CHAT_FILE } = require("../../constants");
const { writeFile } = require("../Util/writeFile");

class ChatController {
  constructor() {
    this.file = CHAT_FILE;
  }

  getChats() {
    return new Promise(async (resolve, reject) => {
      try {
        const chatsJSON = await readFile(this.file);
        const chatData = JSON.parse(chatsJSON);
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

  addNewMessageInChat(payload) { 
    return new Promise(async (resolve, reject) => {
      try {
        const { chatId, messageId } = payload;
        console.log(chatId, messageId, "new message chat");
        const oldChatData = await this.getChats();
        const oldChatID_Data = await this.getChatById(chatId);
        const newChatID_Data = {
          ...oldChatID_Data,
          messages: [...oldChatID_Data.messages, messageId]
        };
        const newChatData = {
          ...oldChatData,
          [chatId]: newChatID_Data,
        };
        // console.log(newChatData, "NEW...");
        const newChatDataJson = JSON.stringify(newChatData);
        await writeFile(this.file, newChatDataJson);
        resolve(newChatID_Data);
      } catch (err) {
        reject({ ...err });
      }
    });
  }
}

module.exports = { ChatController };
