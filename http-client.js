//import the global http node module
const http = require("http");

//call the get method
http.get(process.argv[2], (res) => {
  //set the encoding to utf8 so you can get string data
  res.setEncoding("utf8");
  res.on("data", (data) => {
    //log the data
    console.log(data);
  });
});
