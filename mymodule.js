//import global node modules
const fs = require("fs");
const path = require("path");

//export the filter function
module.exports = function filterFiles(dir, filter, callback) {
  fs.readdir(dir, (err, data) => {
    //read the folder directory
    //if there was an error, return with the function callback with parameter: err
    if (err) return callback(err);
    //otherwise, return with function with empty first parameter
    //and a filtered list of markdown files from the folder directory
    else
      callback(
        null,
        data.filter((file) => {
          return path.extname(file) === `.${filter}`;
        })
      );
  });
};
