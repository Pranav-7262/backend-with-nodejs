// import { readFile, writeFile } from "fs/promises";
// import path from "path";
// const DATA_FILE = path.join("data", "links.json");

// export const saveLinks = async (links) => {
//   await writeFile(DATA_FILE, JSON.stringify(links));
// };

// export const loadLinks = async () => {
//   try {
//     const data = await readFile(DATA_FILE, "utf-8");
//     return JSON.parse(data);
//   } catch (error) {
//     //creation of file if not exists
//     if (error.code === "ENOENT") {
//       await writeFile(DATA_FILE, JSON.stringify({}));
//       return {};
//     }
//     throw error;
//   }
// };

import { dbClient } from "../config/db_client.js";
import { env } from "../config/env.js";
const dbName = dbClient.db(env.MONGO_DB_NAME);
const collection = dbName.collection("shorteners");

export const loadLinks = async () => {
  // gets documents from database
  return await collection.find().toArray();
};

export const saveLinks = async (links) => {
  // Save the document to database
  return await collection.insertOne(links);
};
export const getLinkByShortCode = async (shortCode) => {
  //This is for check duplicated entry
  return await collection.findOne({ ShortCode: shortCode });
};
