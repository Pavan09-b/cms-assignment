const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
  createPage,
  getPages,
  getPublishedPages,
  getPage,
  updatePage,
  deletePage,
} = require("../controllers/pageController");

// ---------- Public ----------
router.get("/public", getPublishedPages);

// ---------- Protected ----------
router.get("/", verifyToken, getPages);
router.get("/:id", verifyToken, getPage);

router.post("/", verifyToken, createPage);
router.put("/:id", verifyToken, updatePage);
router.delete("/:id", verifyToken, deletePage);

module.exports = router;