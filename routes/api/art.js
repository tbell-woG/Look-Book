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
