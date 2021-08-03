const { readFile } = require("../Util/readFile");
const { writeFile } = require("../Util/writeFIle");
class MessageController {
  constructor() {
    this.file =
      "/Users/rahul/Desktop/Practice/dummy-chat/src/Server/message.json";
  }

  getMessage(messageId) {
    return new Promise(async (resolve, reject) => {
      try {
        const dataJSON = await readFile(this.file);
        const data = JSON.parse(dataJSON);
        if (!Object.keys(data).includes(messageId)) {
          reject({
            message: "Message not found",
          });
        }

        resolve(data[messageId]);
      } catch (err) {
        reject({ ...err });
      }
    });
  }
  postMessage(messageJSON) {
    console.log("here");
    return new Promise(async (resolve, reject) => {
      try {
        const oldMessageJson = await readFile(this.file);
        const oldMessage = JSON.parse(oldMessageJson);
        const newMessages = {
          ...oldMessage,
          [messageJSON.id]: messageJSON,
        };
        const newMessagesJSON = JSON.stringify(newMessages);
        await writeFile(this.file, newMessagesJSON);
        resolve(messageJSON);
      } catch (err) {
        reject({ ...err });
      }
    });
  }
}

module.exports = { MessageController };
