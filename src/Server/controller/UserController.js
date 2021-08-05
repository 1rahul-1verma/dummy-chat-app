const { readFile } = require("../Util/readFile");
const {USER_FILE} = require("../../constants");

class UserController {
  constructor() {
    this.file = USER_FILE;
  }

  getUsers() {
    return new Promise(async (resolve, reject) => {
      try {
        const userDataJSON = await readFile(this.file);
        const userData = JSON.parse(userDataJSON);
        resolve(userData);
      } catch (err) {
        reject({ ...err });
      }
    });
  }

  getUserById(userId) {
    console.log("GET USER BY ID")
    return new Promise(async (resolve, reject) => {
      try {
        const usersJSON = await readFile(this.file);
        const users = JSON.parse(usersJSON);
        if (!Object.keys(users).includes(userId)) {
          reject({});
        }
        resolve(users[userId]);
      } catch (err) {
        reject({ ...err });
      }
    });
  }
}

module.exports = { UserController };
