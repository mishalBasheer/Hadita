import express from "express";
import {
  showLanding,
  showContact,
  showServices,
  showServiceDetails,
  showAbout,
  showBlog,
  showBlogDetails,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(showLanding);
router.route("/contact").get(showContact);
router.route("/services").get(showServices);
router.route("/services/:id").get(showServiceDetails);
router.route("/about").get(showAbout);
router.route("/blog").get(showBlog);
router.route("/blog/:id").get(showBlogDetails);

export default router;
