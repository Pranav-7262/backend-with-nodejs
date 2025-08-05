import { readFile, writeFile } from "fs/promises";
import path from "path";
import crypto from "crypto";
import express from "express";

const app = express();

const DATA_FILE = path.join("data", "links.json");

const saveLinks = async (links) => {
  await writeFile(DATA_FILE, JSON.stringify(links));
};

const loadLinks = async () => {
  try {
    const data = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    //creation of file if not exists
    if (error.code === "ENOENT") {
      await writeFile(DATA_FILE, JSON.stringify({}));
      return {};
    }
    throw error;
  }
};

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const file = await readFile(path.join("views", "index.html"));
    // console.log("file :", file.toString());
    const links = await loadLinks();
    console.log("links :", links);
    const content = file.toString().replaceAll(
      "{{shortened_urls}}",
      Object.entries(links)
        .map(
          ([ShortCode, url]) =>
            `<li> <a href="/${ShortCode}" target="_blank">${req.host}/${ShortCode} </a> - ${url}</li>`
        )
        .join("")
    );
    return res.send(content);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error !");
  }
});
app.post("/", async (req, res) => {
  try {
    const { url, ShortCode } = req.body;
    const finalShortCode = ShortCode || crypto.randomBytes(4).toString("hex");
    const links = await loadLinks();
    if (links[finalShortCode]) {
      return res.status(400).send("Short code already exists !");
    }
    links[finalShortCode] = url; //adding data
    await saveLinks(links);
    return res.redirect("/");
  } catch (error) {
    console.error(error);
  }
});
app.get("/:ShortCode", async (req, res) => {
  try {
    const { ShortCode } = req.params;
    const links = await loadLinks();
    if (!links[ShortCode]) {
      return res.status(400).send("404 error occured");
    }
    return res.redirect(links[ShortCode]);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error !");
  }
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
