const db = require('./../mySQLConnect');

module.exports = function(req, res, next) {
  res.locals.nav = [];
  db.query('SELECT title, nick FROM lists', function(err, result) {
      if (err) throw err;
      res.locals.nav = result;
      next();
  });
};