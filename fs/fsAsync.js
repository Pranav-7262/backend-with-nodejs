const fs = require("fs/promises");
const path = require("path");

const filename = "fsAsync.txt";
// const filename2 = "pranav.txt";
const filePath = path.join(__dirname, filename);

// const file = __dirname;

// const readFolder = async () => { //Read dir
//   try {
//     const res = await fs.promises.readdir(file);
//     console.log(res);
//   } catch (error) {
//     console.error(error);
//   }
// };
// readFolder();

//writing a file --->

// const writeFileExample = async () => {
//   try {
//     await fs.writeFile(filePath, "This is a initial data !!", "utf-8");
//     console.log("File created successfully!");
//   } catch (error) {
//     console.error(error);
//   }
// };
// writeFileExample();

//Reading a file -------->

// const ReadFileExample = async () => {
//   try {
//     const data = await fs.readFile(filePath, "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };
// ReadFileExample();

//Appending a file ------------->

// const appendFileExample = async () => {
//   try {
//     await fs.appendFile(filePath, "\nthis is appended data!", "utf-8");
//     console.log("appended");
//   } catch (error) {
//     console.error(error);
//   }
// };
// appendFileExample();

//Renaming file ------>

// const newpath = "FsAsyncawait.js";
// const pathNew = path.join(__dirname, newpath);
// const renameFile = async () => {
//   try {
//     await fs.rename(filePath, pathNew);
//     console.log("file renamed!!");
//   } catch (error) {
//     console.error(error);
//   }
// };

// renameFile();

//deleting file ----------------->

// const deleteFile = async () => {
//   try {
//     await fs.unlink(filePath);
//     console.log("file deleted at path", filePath);
//   } catch (error) {
//     console.error(error);
//   }
// };
// deleteFile(); //deleted pranav.txt
