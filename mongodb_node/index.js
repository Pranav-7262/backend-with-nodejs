import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1";
const client = new MongoClient(url);

await client.connect();
console.log("database connected");

const db = client.db("mongo_node_db");
const collection = db.collection("users");

//1. insertion in collection ---->

// collection.insertOne({ name: "Pranav Varpe", age: 20 });

// collection.insertMany([
//   { name: "Pranav Varpe", age: 20 },
//   { name: "Manthan Varpe", age: 18 },
//   { name: "Dhiraj Varpe", age: 18 },
// ]);

//2. Read

// const data = await collection.find().toArray();
// console.log("your data is :", data);

//3. Update
// await collection.updateOne({ name: "Manthan Varpe" }, { $set: { age: 19 } });

//4. Delete

const remove = await collection.deleteOne({ age: 19 });
console.log(`${remove.deletedCount}  documents deleted`);
