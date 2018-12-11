const bodyParser = require('body-parser');

exports.get = function (req, res) {
res.render('login');
};

exports.post = function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  res.send({});
};

