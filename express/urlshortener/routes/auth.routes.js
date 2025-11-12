import { Router } from "express";
import * as authController from "../controller/auth.controller.js";
const router = Router();

router.get("/register", authController.getRegisterPage); //calling authController to get register page
// router.get("/login", authController.getLoginPage); //calling authController to get login page

router
  .route("/login")
  .get(authController.getLoginPage)
  .post(authController.postLoginPage); //calling authController to get login page and post login page

export const authRoutes = router;
