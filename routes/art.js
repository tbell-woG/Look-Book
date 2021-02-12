// require dependencies
const router = require("express").Router();
const artController = require("../controllers/artController");

// make a get request
router.route('/')
  .get(artController.findAll)
  .post(artController.create)


module.exports = router;