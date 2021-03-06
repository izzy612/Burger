const burgers = require("../models/burgers");

module.exports = app => {

  //Get all burgers API

  app.get("/api/burgers", function (req, res) {
    burgers.findAll()
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  //Post/create burgers Api

  app.post("/api/burgers", function (req, res) {
    
    burgers.create(req.body)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
    })
  })

  //Get burger by its id 
  app.get("/api/burgers/:id", function (req, res) {
    burgers.findbyId(req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  //Update burgers if theyre eaten or no 

  app.put("/api/burgers/:id", function (req, res) {
    burgers.update(req.body.eaten, req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  //Deleting a burger
  
  app.delete("/api/burgers/:id", function (req, res) {
    burgers.remove(req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

}