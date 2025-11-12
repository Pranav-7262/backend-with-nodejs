import { MongoClient } from "mongodb";
import { env } from "./env.js";

export const dbClient = new MongoClient(env.MONGO_URI);
