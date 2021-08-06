const { readFile } = require("../Util/readFile");
const { writeFile } = require("../Util/writeFile");
const { CHAT_FILE } = require("../../constants");

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
        const newChatDataJson = JSON.stringify(newChatData);
        await writeFile(this.file, newChatDataJson);
        resolve(newChatID_Data);
      } catch (err) {
        reject({ ...err });
      }
    });
  }

  addNewChatRoom(payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const oldChatJson = await readFile(this.file);
        const oldChat = JSON.parse(oldChatJson);
        const newChat = {
          ...oldChat,
          [payload.id]: payload
        };
        const newChatJson = JSON.stringify(newChat);
        await writeFile(this.file, newChatJson);
        resolve(payload);
      } catch (err) {
        reject({ ...err });
      }
    });
  }
}

module.exports = { ChatController };
