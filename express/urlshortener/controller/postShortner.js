import crypto from "crypto";
import {
  saveLinks,
  loadLinks,
  getLinkByShortCode,
} from "../model/modelShortener.js";
export const postURLShortner = async (req, res) => {
  try {
    const { url, ShortCode } = req.body;
    const finalShortCode = ShortCode || crypto.randomBytes(4).toString("hex");
    // const links = await loadLinks();

    // links[finalShortCode] = url; //adding data
    // await saveLinks(links);
    await saveLinks({ url, ShortCode });
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

    // let isLoggedIn = req.headers.cookie; //this will give us the cookie
    // // console.log("cookie :", isLoggedIn);
    // isLoggedIn = Boolean(isLoggedIn && isLoggedIn.includes("loggedIn=true"));
    // // this checks if the cookie is present and if it has loggedIn=true
    // console.log("isLoggedIn :", isLoggedIn);

    let isLoggedIn = req.cookies.loggedIn; //this will give us the cookie
    console.log("cookie :", isLoggedIn);

    return res.render("index", { links, hosts: req.host, isLoggedIn }); //passing links and hosts to the index page
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error !");
  }
};
export const redirectToShort = async (req, res) => {
  try {
    const { ShortCode } = req.params;
    const link = await getLinkByShortCode(ShortCode);

    if (!link || link.length === 0) {
      return res.redirect("/404");
    }
    return res.redirect(link.url);
    // const links = await loadLinks();
    // if (!links[ShortCode]) {
    //   return res.status(400).send("404 error occured");
    // }
    // return res.redirect(links[ShortCode]);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error !");
  }
};
