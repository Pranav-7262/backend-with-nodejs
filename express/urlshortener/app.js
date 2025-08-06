import express from "express";
import { shortenedRoutes } from "./routes/routes.js";
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
const PORT = process.env.PORT || 3004;

app.use(shortenedRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
