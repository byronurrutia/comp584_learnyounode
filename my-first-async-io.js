//import module from the node core library and destructure it
const fs = require("fs");

//aysncronously read the file in utf8 format and count the
//number of newlines
//read the data
//put the newlines in a array
//count the number of indexes minus 1
//log the count
fs.readFile(process.argv[2], "utf8", (err, data) => {
  console.log(data.split("\n").length - 1);
});
