//import modules from the node core library and destructure it
const fs = require("fs");
var path = require("path");

//read the first command line arguement
fs.readdir(process.argv[2], (err, data) => {
  //if a error occurs, exit the function
  if (err) {
    return;
  } else {
    //otherwise, go through each file and check if its a markdown file and log it
    data.map((file) => {
      if (path.extname(file) === `.${process.argv[3]}`) console.log(file);
    });
  }
});
