const burgers = require("../models/burgers");

module.exports = app => {

  app.get("/", function (req, res) {
    
    burgers
      .findAll()
      .then(dbBurgerData => {
        res.render("index", { burgerData: dbBurgerData })
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}