const path = require("path");

// The path module provides utilities for working with file and directory paths
console.log("current dirname is :", __dirname);
console.log("current filename is :", __filename);

// path.join() is used to join all given path segments together using the platform-specific separator as a delimiter

const joinesPath = path.join(__dirname, "add.js", "call.js"); // Joining the current directory with add.js and call.js
console.log("Joined Path:", joinesPath);

//other methods =>
const parseData = path.parse(joinesPath); // Parsing the joined path to get an object with properties like root, dir, base, ext, name
const resolvedPath = path.resolve(joinesPath); //gets the absolute path of the joined path
const extName = path.extname(joinesPath); // gets the extension name of the file
const basename = path.basename(joinesPath); // gets the last portion of the path
const dirName = path.dirname(joinesPath); // gets the directory name of the path

console.log({
  parseData,
  resolvedPath,
  extName,
  basename,
  dirName,
  separater: path.sep,
});
