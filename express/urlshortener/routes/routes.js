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
router.get("/", getShortenerPage);

router.post("/", postURLShortner);

router.get("/:ShortCode", redirectToShort);

export const shortenedRoutes = router;
