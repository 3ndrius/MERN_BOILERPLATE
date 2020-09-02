const router = require("express").Router();
const postController = require("../controller/postController");

// Define routes here
router.use("/posts", postController);
//router.post("/register", authController.register);
module.exports = router;