// Implement a node app called fetcher.js.

//const { timeStamp } = require("console");

// It should take two command line arguments:
// a URL
// a local file path
// 
// You need to make an http request and wait for the response.
// After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.
//
//1 char === 1 byte

//TIPS
// Install and use the needle library to make the HTTP request
// Use Node's fs (file system) module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning above)

//input: URL
//input: file path

// output: should download stuff to a file
//output: "Downloaded and saved 1235 bytes to ./index.html."




const needle = require('needle');
const fs = require('node:fs');
let commandLineInput = process.argv.slice(2);


needle.get(commandLineInput[0], (error, response, body) => {
  if ()
 
 
 
 
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(commandLineInput[1], (body), err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Downloaded and saved ${Buffer.byteLength(body)} bytes to ${commandLineInput[1]}`)
      // file written successfully
    }
  });
});
