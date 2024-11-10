const express = require("express");
const validatePost = require("../middleware/validatePost");
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", validatePost, createPost);
router.put("/:id", validatePost, updatePost);
router.delete("/:id", deletePost);

module.exports = router;
