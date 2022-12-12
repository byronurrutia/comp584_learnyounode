//import module from the node core library and destructure it
const fs = require("fs");

//use the file reading method to read the first command line argument
//cast the read file buffer to a string
var str = fs.readFileSync(process.argv[2]).toString();
//take out the newlines and put it in its own array
//count the length of the array minus 1
//output the value
console.log(str.split("\n").length - 1);
