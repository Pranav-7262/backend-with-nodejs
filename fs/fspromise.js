const fs = require("fs");
const path = require("path");

// const filename = "fsPromise2.txt";

const filename = "fsPromise.txt";
const filePath = path.join(__dirname, filename);

//reading dir ---->

// const file = __dirname;
// fs.promises
//   .readdir(file)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

//Writing a file ------>

fs.promises
  .writeFile(filePath, "This is initial data", "utf-8")
  .then(console.log("file created !"))
  .catch((err) => {
    console.error(err);
  });

//Reading a file---------->

// fs.promises
//   .readFile(filePath, "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.error(err);
//   });

//appending a file --------->

// fs.promises
//   .appendFile(filePath, "\nappended content", "utf-8")
//   .then(console.log("appended successfully !"))
//   .catch((err) => {
//     console.error(err);
//   });

//deleting a file -------->

// fs.promises
//   .unlink(filePath)
//   .then(console.log("File deleted !"))
//   .catch((err) => {
//     console.error(err);
//   }); // deleted file --> fsPromise2.txt !
