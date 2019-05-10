const connection = require('./connection');

const findAll = () => {

  return new Promise((resolve, reject) => {
     connection.query('SELECT * FROM burgers', function (err, burgerData) {
      
      if (err) {
        return reject(err)
      }
      
      return resolve(burgerData);
    
      });
    });
};

const findbyId = burgerId => {
  
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers WHERE id = ?', [burgerId], function (err, burgerData) {
      if (err) {
        return reject(err);
      }
      return resolve(burgerData);
    });

  })
}