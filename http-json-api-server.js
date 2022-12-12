//import global node modules
const http = require("http");
const url = require("url");

//get date object and return a json with current time data
var regularTime = (time) => {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
};

//get date object and return unix time in json
function unixTime(time) {
  return { unixtime: time.getTime() };
}

//check the url and its url parameter to route to the right json return function
var urlRoutes = (url) => {
  switch (url.pathname) {
    //check the url and map it to the right function
    //create a new date object and save the url query iso ("?iso=2013-08-10T12:10:15.474Z") to it
    case "/api/parsetime":
      return regularTime(new Date(url.query.iso));
    case "/api/unixtime":
      return unixTime(new Date(url.query.iso));
    default:
      return "please enter a valid endpoint url";
  }
};

//creat a server
http
  .createServer((req, res) => {
    //when a GET request comes give it a response
    if (req.method === "GET") {
      //format response by giving it a header
      res.writeHead(200, { "Content-Type": "application/json" });
      //use url module to parse the url
      let reqUrl = url.parse(req.url, true);
      //convert the results of the function to JSON format
      res.end(JSON.stringify(urlRoutes(reqUrl)));
    } else {
      //if method not get, send a status 405
      res.writeHead(405);
      res.end();
    }
  })

  //listen to the url and log the url
  .listen(+process.argv[2], () => {
    console.log(`Server listening on http://localhost:%s${process.argv[2]}`);
  });
