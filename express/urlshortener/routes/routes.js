import { Router } from "express";
import {
  postURLShortner,
  getShortenerPage,
  redirectToShort,
} from "../controller/postShortner.js";

const router = Router();

// router.get("/report", (req, res) => {
//   const student = {
//     name: "pranav",
//     dept: "CSE",
//     CGPA: "8.85",
//   };
//   return res.render("report", { student });
// });
router.get("/", getShortenerPage); //work when page is loaded

router.post("/", postURLShortner); //work when form is submitted

router.get("/:ShortCode", redirectToShort); //work when short code is clicked

export const shortenedRoutes = router;
