//here we are using the fs module via asynchronously

const fs = require("fs");
const path = require("path");

const fileName = "fsasync.txt";
const filePath = path.join(__dirname, fileName);

// fs.writeFile(filePath, "this is a initial data", "utf-8", (err) => {
//   if (err) console.error(err);
//   else console.log(`File is crearted at path ${filePath}`);
// });

//reading a file ---->

// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) console.error(err);
//   else console.log("You can read file\n", data);
// });

//Appending into a file  ------>

// fs.appendFile(
//   filePath,
//   "\nThis is the appended content of the file",
//   "utf-8",
//   (err) => {
//     if (err) console.error(err);
//     else console.log("appending successfully");
//   }
// );

//deleting a file -------->

// fs.unlink(filePath, (err) => {
//   if (err) console.error(err);
//   else console.log("file deleted !");
// });

//Again creating new file -------->

// fs.writeFile(filePath, "this a new file", "utf-8", (err) => {
//   if (err) console.error(err);
//   else console.log("New File created !");
// });

//renaming file --------->

const updatedPath = "asyncfs.txt";
const newPath = path.join(__dirname, updatedPath);

fs.rename(filePath, newPath, (err) => {
  if (err) console.error(err);
  else console.log("renamed successfully");
});
