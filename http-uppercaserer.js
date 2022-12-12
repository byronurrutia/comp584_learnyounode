//import global node modules
const http = require("http");
const map = require("through2-map");

http
  .createServer((req, res) => {
    //check the method of the request
    if (req.method === "POST") {
      //write status at the header for your response
      res.writeHead(200, { "Content-Type": "text/plain" });
      // stream request using pipe to map
      req
        .pipe(
          map((chunk) => {
            //convert request to uppercase string
            return chunk.toString().toUpperCase();
          })
        )
        //stream result into response using pipe
        .pipe(res);
    } else {
      //if method not post, send a status 405
      res.writeHead(405);
    }
  })

  //listen to the url and log the url
  .listen(+process.argv[2], () => {
    console.log(`Server listening on http://localhost:%s${process.argv[2]}`);
  });
