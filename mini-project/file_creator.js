import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
  //creating set-up for deals with CLI

  input: process.stdin,
  output: process.stdout,
});

const FileCreation = () => {
  rl.question("Enter File name to create : ", (filename) => {
    rl.question("Enter content for your file: ", (data) => {
      fs.writeFile(`${filename}.txt`, data, (err) => {
        if (err) {
          console.error(`Error for writing file : ${err.message}`);
        } else {
          console.log(`${filename}.txt is created successfully !!!`);
        }
        rl.close();
      });
    });
  });
};

FileCreation();
