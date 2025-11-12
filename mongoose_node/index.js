import mongoose from "mongoose";

try {
  await mongoose.connect("mongodb://127.0.0.1/mongoose_node");
  console.log("Connected to MongoDB");
  mongoose.set("debug", true); // Enable debug mode to log all queries
} catch (error) {
  console.error(error);
}
//create schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
      min: 5,
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now(),
    // },
    // updatedAt: {
    //   type: Date,
    //   default: Date.now(),
    // },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

//creating a middleware for updating the updatedAt field
// userSchema.pre(
//   ["updateOne", "updateMany", "findOneAndUpdate"],
//   function (next) {
//     this.set({
//       updatedAt: Date.now(), // set the updatedAt field to current date
//     });
//     next(); // call next middleware or function
//   }
// );

//create a model
const model = mongoose.model("User", userSchema); // created collection name is users

//insert
// await model.create({
//   name: "Pranav4",
//   email: "abc@gmail4.com",
//   age: 21,
// });
//update with middleware
await model.updateOne({ name: "Pranav4" }, { $set: { age: 20 } });

await mongoose.connection.close(); // close the connection after operations
