//comand line arguements can be access by the procss object
//the argv is a array containg the complete command-line
//console.log(process.argv);

// You'll need to think about how to loop through the number arguments so
// you can output just their sum. The first element of the process.argv array
// is always 'node', and the second element is always the path to your
// baby-steps.js file, so you need to start at the 3rd element (index 2),
// adding each item to the total until you reach the end of the array.

// Also be aware that all elements of process.argv are strings and you may
// need to coerce them into numbers. You can do this by prefixing the
// property with + or passing it to Number(). e.g. +process.argv[2] or
Number(process.argv[2]);
var sum = 0;
process.argv.map((x) => {
  if (x === process.argv[0] || x === process.argv[1]) return;
  else sum = sum + Number(x);
});
console.log(sum);
