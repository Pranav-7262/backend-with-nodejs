import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

// absolute path
const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  // console.log(import.meta.dirname);
  // console.log(import.meta.filename);
  // console.log(import.meta.url);

  // const __fileName = new URL(import.meta.url).pathname;
  // console.log(__fileName);

  const home_path = path.join(import.meta.dirname, "public", "index.html");
  res.sendFile(home_path); //used sendFile
});
app.get("/profile/:username", (req, res) => {
  console.log(req.params); // Used for gets slug
  res.send(`HI my name is ${req.params.username} !!`);
});

app.get("/profile/:username/article/:slug", (req, res) => {
  console.log(req.params); //Used for gets searched data / filtering
  const formatedSlug = req.params.slug.replace(/-/g, " ");
  res.send(`<h1> Article ${req.params.username} by ${formatedSlug} </h1>`);
});

app.get("/product", (req, res) => {
  // Query Parameter
  console.log(req.query); // { page: '2', limit: '10' }
  res.send(
    `<h1>The user is looking for ${req.query.page} product and ${req.query.limit}</h1>` // using & operator we can merge more than one parameter
  ); //product?page=2&limit=10
});

app.get("/about", (req, res) => res.send("<h1>Hello about page !</h1>"));

// app.get("/contact", (req, res) => {
//   console.log(req.query);
//   res.send("hi");
// });

//Using POST method -------------->
app.use(express.urlencoded({ extended: true }));
app.post("/contact", (req, res) => {
  console.log(req.body);
  res.redirect("/"); // contact?name=Pranav+Rangrao+Varpe&message=hello , -->   name: 'Pranav Rangrao Varpe, message: 'hello'
});

//404 page not found code --------->
app.use((req, res) => {
  // return res.status(404).send("<h1>page not found</h1>");
  return res
    .status(404)
    .sendFile(path.join(import.meta.dirname, "views", "404.html"));
});
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
