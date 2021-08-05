const fs = require("fs");

function writeFile(file, bodyJson) {
  return new Promise((resolve, reject) => {
    try {
      fs.writeFileSync(file, (bodyJson), (err) => {
        if (err) {
          throw err;
        } else {
          console.log("Success!");
        }
      });
      resolve("File written!");
    } catch (err) {
      reject({ ...err });
    }
  });
}

module.exports = { writeFile };