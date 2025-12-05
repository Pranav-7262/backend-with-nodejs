import mysql from "mysql2/promise";

//1 . connect to mySql server

const my_db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pranav7262",
  database: "node_sql",
});
console.log("mysql connected successfully !! ");

//2. we need to create DB

// await my_db.execute("create database node_sql");
// console.log("database created!! ");
// console.log(await my_db.execute("show databases"));

//3. then we need to create a table so far ...

// await my_db.execute(`CREATE TABLE users(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(30),
//     email VARCHAR(50) UNIQUE
//     );`);

// console.log("Table is created !!");

//4. is to perform CRUD operations ...

//insert

// await my_db.execute(
//   `insert into users(username,email) values ("pranav" , "pranav@gmail.com") , ("manthan" , "manthan@gmail.com");`
// );
// console.log("Insertion successful");

//Prepared statement ..
// await my_db.execute(`insert into users(username,email) values (? , ?)`, [
//   "pratik",
//   "pratik@gmail.com",
// ]);
// console.log("Insertion successful");

//Inserting multiple data ...

// const new_data = [
//   ["alice", "alice@gmail.com"],
//   ["rohan", "rohan@gmail.com"],
//   ["manali", "manali@gmail.com"],
//   ["rasika", "rasika@gmail.com"],
//   ["shrutika", "shrutika@gmail.com"],
// ];
// await my_db.query(`insert into users(username,email) values ?`, [new_data]);
// console.log("Insertion successful");

//Read

// const [data] = await my_db.execute(`select * from users`);
// console.log(data);

//Where clause

// const [data] = await my_db.execute(
//   `select * from users where username = "shrutika"  `
// );
// console.log(data);
// const [data] = await my_db.execute(
//   `select * from users where username = "shrutika"  `
// );
// console.log(data);

//Update

try {
  const [data] = await my_db.execute(
    `UPDATE users set username = ? WHERE username = ? `,
    ["shrutika", "shrutika_varpe"]
  );
  console.log(data);
} catch (error) {
  console.error(error);
}

//reading updated data
const [data] = await my_db.execute(`select * from users`);
console.log(data);

//DELETE

// const [data] = await my_db.execute(
//   `DELETE from users where email = "alice@gmail.com" AND username = "alice"`
// );
// console.log(data);
