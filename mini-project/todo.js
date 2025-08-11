//This is my very first Node JS PRoject i.e To-Do CLI ------>

import readline from "readline";

const rl = readline.createInterface({
  //this
  //this is creating
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

//handleInput method ----------->
const handleInput = (option) => {
  if (option === "1") {
    rl.question("Enter a Task :", (task) => {
      todos.push(task);
      console.log("Task Added !", task);
      showMenu();
    });
  } else if (option === "2") {
    if (todos.length === 0) {
      console.log("\nNo More Todos");
    }
    console.log("\nYour Todo Lists :");
    todos.forEach((todo, index) => {
      console.log(`${index + 1}. ${todo}`);
    });
    showMenu();
  } else if (option === "3") {
    while (todos.length !== 0) {
      todos.pop();
      ``;
    }
    console.log("deleted all tasks");
    showMenu();
  } else if (option === "4") {
    console.log("Good Byeee!");
    rl.close();
  } else {
    console.log("Invalid chices , Please try again");
    showMenu();
  }
};

//ShowMenu method -------->
const showMenu = () => {
  console.log("\n1: Add a Task");
  console.log("\n2: View Tasks");
  console.log("\n3: Clear all Tasks");
  console.log("\n4: Exit");
  rl.question("\nChoose an option : ", handleInput);
};

showMenu();
