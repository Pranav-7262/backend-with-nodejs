import express from "express";
import { shortenedRoutes } from "./routes/routes.js";
import { authRoutes } from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
const PORT = process.env.PORT || 3004;

app.use(cookieParser()); // Middleware to parse cookies
app.use(authRoutes); // Use authRoutes for authentication-related routes
app.use(shortenedRoutes); // Use shortenedRoutes for URL shortening functionality
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
