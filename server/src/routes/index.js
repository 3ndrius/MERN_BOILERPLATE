const router = require("express").Router();
const postController = require("../controller/postController");

// Define routes here
router.use("/posts", postController);

module.exports = router;