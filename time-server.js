//import the net module
const net = require("net");

//format the time for single digits to have a zero infront of it
function formatTime(i) {
  return (i < 10 ? "0" : "") + i;
}

//get the current time in this format yyyy-mm-dd hr:min
function now() {
  let date = new Date();
  // prettier-ignore
  return `${date.getFullYear()}-${formatTime(date.getMonth() + 1)}-${formatTime(date.getDate())} ${formatTime(date.getHours())}:${formatTime(date.getMinutes())}`;
}

//start a server and call the current time in every line run
var server = net.createServer((socket) => {
  //write and close the socket
  socket.end(now() + "\n");
});

//server listens to connection
server.listen(Number(process.argv[2]));
