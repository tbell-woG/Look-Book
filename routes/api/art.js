<<<<<<< HEAD
const router = require("express").Router();
const artcontroller = require("../../controllers/artcontroller");

// Matches with "/api/art"
router.route("/")
  .get(artcontroller.findAll)
  .post(artcontroller.create);

// Matches with "/api/art/:id"
router
  .route("/:id")
  .get(artcontroller.findById)
  .put(artcontroller.update)
  .delete(artcontroller.remove);

module.exports = router;
=======
// require dependencies
const router = require("express").Router();
const artController = require("../../controllers/artController");


//file is beginning already wiht /api

// make a get request
router.route('/art')
  .get(artController.findAll)
  .post(artController.create)


module.exports = router;
>>>>>>> 7fce917128e9ad085f660ff23dfe723d1371039b
