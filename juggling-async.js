//import modules
const http = require("http");
const bl = require("bl");

//keep track of the data being loaded
var arr = [];
//keep track of the number of times data is being loaded
var count = 0;

//print the array
function printResults() {
  for (var i = 0; i < 3; i++) {
    console.log(arr[i]);
  }
}

//call the function in increments to 3
function httpGet(index) {
  //ge the link and get the data
  http.get(process.argv[2 + index], (res) => {
    //load the data in certain capacity
    res.pipe(
      //buffer list
      bl((err, data) => {
        if (err) return console.error(err);
        //put the data in the array
        arr[index] = data.toString();
        //increment the count
        count++;
        //once the count gets to 3, print the array
        if (count == 3) {
          printResults();
        }
      })
    );
  });
}

//call the functions 3 times
for (var i = 0; i < 3; i++) httpGet(i);
