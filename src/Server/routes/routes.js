const express = require("express"),
router = express.Router();

const { userRoutes } = require("./userRoutes.js");
const { messageRoutes } = require("./messageRoutes.js");

router.use("/user", userRoutes);
router.use("/message", messageRoutes);

const appRoutes = router;

module.exports = { appRoutes };