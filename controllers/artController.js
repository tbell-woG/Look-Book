// require models
const db = require("../models");

// define methods for artController
module.exports = {
  // create a method to get all the books from the database
  // findall the art in the database
  findAll: function(req, res) {
      db.Art
      .find(req.query)
      .then(dbModel => {
          console.log(dbModel)
        res.json(dbModel)
        })
      .catch(err => res.status(422).json(err));
  },
  // create the database
    create: function(req, res) {
        db.Art
        .create(req.body)
        .then(dbModel => {
            console.log(`this is a DBMODEL--->${dbModel}`)
            res.json(dbModel)
        })
        .catch(err => res.status(422).json(err))
    },
    // method to delete the a saved artwork
      delete: function(req, res) {
        db.Art
      .deleteOne(req.id)
      .then(dbModel => {
          console.log(dbModel)
        res.json(dbModel)
        })
      .catch(err => res.status(422).json(err));
      }


}