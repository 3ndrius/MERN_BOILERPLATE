const router = require("express").Router();
const postControler = require("../controller/postController");

// Define routes here
router.use("/posts", postControler);

module.exports = router;