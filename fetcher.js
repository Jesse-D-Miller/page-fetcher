const needle = require('needle'); //calls library
const fs = require('node:fs'); //need this to write files

let commandLineInput = process.argv.slice(2); //takes command line arguments


needle.get(commandLineInput[0], (error, response, body) => {
  if (error) { //error handling i honestly dont understand
    console.error('Error:', error);
    return;
  }
  if (response && response.statusCode === 200) {//if connection is good, no error or 404

    fs.writeFile(commandLineInput[1], body, err => { //async file write, needle get is other async component

      if (err) { //if error writing file (path or whatever...)
        console.error(err);
        return;
      }

      console.log(`Downloaded and saved ${Buffer.byteLength(body)} bytes to ${commandLineInput[1]}.`); //this log just outputs something so we know out function actually did something, also computes size of the file (body)
    });

  } else {
    console.error(`Failed to retrieve: ${response && response.statusCode}`);
  }

});