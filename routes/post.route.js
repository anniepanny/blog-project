const { Router } = require("express");


const {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById
} = require("../controllers/post.controller.js");



const router = Router();
router.post("/posts/",createPost);
router.get("/posts/",getAllPosts);
router.get("/posts/:id",getPostById);
router.put("/posts/:id",updatePostById);
router.delete("/posts/:id",deletePostById);

module.exports = router;