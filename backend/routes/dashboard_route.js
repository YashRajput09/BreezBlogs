import express from "express";
import { isAuthenticated } from "../middleware/authenticateUser.js";
import {
  getAnalysisData,
  getTopPerformaceArticle,
  getRecentActivities,
  categoryStats,
} from "../controller/blog_analysis.js";
import {  getMyDraftBlogs,
} from "../controller/blog_controller.js";
const router = express.Router();

router.route("/analytics").get(isAuthenticated, getAnalysisData);

router
  .route("/analytics/topperformingblogs")
  .get(isAuthenticated, getTopPerformaceArticle);

router
  .route("/analytics/recent-activities")
  .get(isAuthenticated, getRecentActivities);

router.route("/analytics/category-stats").get(isAuthenticated, categoryStats);

router.route("/my-drafts/blog").get(isAuthenticated, getMyDraftBlogs);

export default router;
