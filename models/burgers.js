const connection = require('./connection');

const findAll = () => {

  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers', function (err, dbBurgerData) {

      if (err) {
        return reject(err);
      }
      return resolve(dbBurgerData);

    });
  });
};

//find burger by id

const findbyId = burgerId => {

  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers WHERE id = ?', [burgerId], function (err, dbBurgerData) {
      if (err) {
        return reject(err);
      }
      return resolve(dbBurgerData);
    });

  })
};

//creating a burger (nomnom)

const create = burgerDataObj => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM  burgers SET ?', [burgerDataObj], function (err, dbBurgerData) {
      if (err) {
        return reject(err);
      }
      return resolve(dbBurgerData);
    });
  });
};

//setting up if the burger is been eaten or nah
const update = (eatenValue, burgerId) => {
  return new Promise((resolve, reject) => {

    eatenValue = (eatenValue === "true") ?
      true : false;

    connection.query('UPDATE burgers SET eaten = ? WHERE id = ?', [eatenValue, burgerId], function (err, dbBurgerData) {
      if (err) {
        return reject(err);
      } else if (dbBurgerData.changedRows === 0) {
        return reject({
          message: "You got the wrong ID"
        });
      } else {
        return resolve(dbBurgerData);
      }
    })
  })
}

// deleteing a burger... which is impossible in real life

const remove = (burgerId) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM burgers WHERE  id = ?', [burgerId], function (err, dbBurgerData) {
      if (err) {
        return reject(err);
      }
      else if (dbBurgerData.affectedRows === 0) {
        return reject({message:"You got the wrong ID"})
      }
      else {
        return resolve(dbBurgerData);
      }
      
    })
  })
}

//export modules 

module.exports = {
  findAll,
  findbyId,
  create,
  update,
  remove
};


  
