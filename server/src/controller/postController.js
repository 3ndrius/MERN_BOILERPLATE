const express = require("express");
const postController = express.Router();
const Post = require("../models/post.model");

/* Get all Posts */
postController.get("/", async (req, res, next) => {
  try {
    let posts = await Post.find({});
    res.status(200).send({
      success: true,
      data: posts,
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
});

/* Get Single Post */
postController.get("/:post_id", async (req, res, next) => {
  try {
    let post = await Post.findById(req.params.post_id);
    res.status(200).send({
      success: true,
      data: post,
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
});

/* Add Single Post */
postController.post("/", async (req, res, next) => {
  try {
    let newPost = {
      title: req.body.title,
      body: req.body.body,
      author: req.body.author,
    };
    let post = await Post.create(newPost);
    res.status(201).json({
      success: true,
      data: post,
      message: "Post created successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: "Error whitle creating" + err,
    });
  }
});

/* Edit Single Post */
postController.patch("/:post_id", async (req, res, next) => {
  try {
    let fieldsToUpdate = req.body;
    let post = await Post.findByIdAndUpdate(
      req.params.post_id,
      { $set: fieldsToUpdate },
      { new: true }
    );
    res.status(200).json({
      success: true,
      data: post,
      message: "Post updated successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
});

/* Delete Single Post */
postController.delete("/:post_id", async (req, res, next) => {
  try {
    let result = await Post.findByIdAndDelete(req.params.post_id);
    res.status(200).json({
      success: true,
      data: result,
      message: "Post deleted successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
});

module.exports = postController;
