//import the http global module
const http = require("http");

//access the data from the link
http.get(process.argv[2], (res) => {
  let body = "";
  //get the data and add it to the body
  res.on("data", function (chunk) {
    body += chunk;
  });
  //log the char length and the body
  res.on("end", () => {
    console.log(body.length);
    console.log(body);
  });
});
