//import global node modules
const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    //append callback function read the file and pass the stream when server is made
    fs.createReadStream(process.argv[3]).pipe(res);
  })
  //listen to the port, append another callback function to log url of server
  .listen(+process.argv[2], () => {
    console.log(`Server listening on http://localhost:%s${process.argv[2]}`);
  });
