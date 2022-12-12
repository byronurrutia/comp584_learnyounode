//import the function from the created module
const filterFiles = require("./mymodule.js");

//call the exported function
filterFiles(process.argv[2], process.argv[3], (err, data) => {
  //if an error occurs, exit the function
  if (err) return;
  //otherwise, go through each file of the response filtered list and log it
  else
    data.map((file) => {
      console.log(file);
    });
});
