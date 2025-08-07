import { createReadStream, createWriteStream } from "fs";
import path from "path";

const inputField = path.join(import.meta.dirname, "index.txt");
const outputField = path.join(import.meta.dirname, "output.txt");

const readStream = createReadStream(inputField, {
  encoding: "utf-8",
  highWaterMark: 10,
});
const writeStream = createWriteStream(outputField);

readStream.on("data", (chunk) => {
  console.log("Buffer chunk :", Buffer.from(chunk));
  console.log("received :", chunk);
  writeStream.write(chunk); //Write each chunk to output file
});

readStream.on("end", () => {
  console.log("File is completed !");
  writeStream.end();
});

readStream.on("error", (err) => console.error(err));
writeStream.on("error", (err) => console.error(err));

//This script copies the contents of index.txt to output.txt using Node.js streams, with error handling and a message when the pipe is set up.
