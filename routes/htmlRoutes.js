const burgers = require("../models/burgers");

module.exports = app => {

  app.get("/", function (req, res) {
    
    burgers
      .findAll()
      .then(burgerData => {
        res.render("index", { dbBurgerData: burgerData })
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}