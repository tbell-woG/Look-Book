// require dependencies
const router = require("express").Router();
const artController = require("../../controllers/artController");


//file is beginning already with /api

// make a get request
router.route('/art')
  .get(artController.findAll)
  .post(artController.create)
  

  router.route('/art/:id')
  .delete(artController.delete)

module.exports = router;



