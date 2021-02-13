// require dependencies
const router = require("express").Router();
const artController = require("../../controllers/artController");


//file is beginning already wiht /api

// make a get request
router.route('/art')
  .get(artController.findAll)
  .post(artController.create)


module.exports = router;