import crypto from "crypto";
import { saveLinks, loadLinks } from "../model/modelShortener.js";
export const postURLShortner = async (req, res) => {
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
};

export const getShortenerPage = async (req, res) => {
  try {
    // const file = await readFile(path.join("views", "index.ejs"));
    // console.log("file :", file.toString());
    const links = await loadLinks();
    return res.render("index", { links, hosts: req.host });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error !");
  }
};
export const redirectToShort = async (req, res) => {
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
};
