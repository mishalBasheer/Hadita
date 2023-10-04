import express from "express";
import {
  showLanding,
  showContact,
  showServiceDetails,
  showBlog,
  showBlogDetails,
  showUseCase,
  showNews,
  showNewsDetails,
  showPrivacyPolicy,
  showTerms,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(showLanding);
router.route("/contact").get(showContact);
router.route("/privacy-policy").get(showPrivacyPolicy);
router.route("/terms").get(showTerms);
router.route("/services/:id").get(showServiceDetails);
router.route("/use-case").get(showUseCase);
router.route("/blog").get(showBlog);
router.route("/blog/:id").get(showBlogDetails);
router.route("/news").get(showNews);
router.route("/news/:id").get(showNewsDetails);

export default router;
