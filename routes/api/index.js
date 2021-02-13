const router = require("express").Router();
const artRoutes = require("./artcontroller");

// Art routes
router.use("/artcontroller", artRoutes);

module.exports = router;
