//here we are using the fs module to sync files

const fs = require("fs");
const path = require("path");

const filename = "test.txt";
const filePath = path.join(__dirname, filename);

//write the file synchronously

// console.log("File Path:", filePath);
// const writeFile = fs.writeFileSync(
//   filePath,
//   "This is a initial content of the file for 2nd file.",
//   "utf-8"
// );
// console.log(writeFile); // Writing to the file synchronously

//read the file synchronously

// const readFile = fs.readFileSync(filePath, "utf-8");
// console.log("File Content:", readFile);

//append the file synchronously

// const appendFile = fs.appendFileSync(
//   filePath,
//   "\nThis is the appended content of the file.",
//   "utf-8"
// );
// console.log("file appended successfully", appendFile);

//delete the file synchronously

// const deleteFile = fs.unlinkSync(filePath);
// console.log("File deleted successfully:", deleteFile); // test2.txt file deleted

//rename the file synchronously

const updatedFile = "renamed_test.txt";
const newFilePath = path.join(__dirname, updatedFile);
console.log(`New File Path: ${newFilePath}`);

const renameFile = fs.renameSync(filePath, newFilePath);
console.log("File renamed successfully:", renameFile); // renamed test.txt to renamed_test.txt
