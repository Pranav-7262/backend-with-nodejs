import express from "express";

const app = express();

app.get("/", (req, res) => res.send("<h1>Hello world !</h1>"));

app.get("/about", (req, res) => res.send("<h1>Hello about page !</h1>"));

app.get("/contact", (req, res) => {
  return res.send(`
       <div class="container">
      <h1>URL Shortner by Pranav</h1>
      <form id="shorten-form">
        <div>
          <label for="url">Enter URL : </label>
          <input type="url" name="url" id="url" required />
        </div>
        <div>
          <label for="ShortCode"> Enter ShortCode : </label>
          <input type="text" name="ShortCode" id="ShortCode" required />
        </div>
        <button type="submit">Shorten</button>
      </form>
      <h2>Shortened URLs</h2>
      <ul id="shortened-urls"></ul>
    </div>
    `);
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
