const fs = require("fs");

function readFile(fileLocation) {
    return new Promise((resolve, reject) => {
      try {
        const data = fs.readFileSync(fileLocation);
        resolve(data);
      } catch (err) {
          reject({...err});
      }
    });
}

module.exports = { readFile };