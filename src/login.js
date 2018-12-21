const
  jwt = require('jsonwebtoken')
  , config = require('../config')
;

module.exports = (req, res) => {
  const {
    username,
    password,
  } = req.body;

  if (!username) {
    return res.status(400).send('username require');
  }

  if (!password) {
    return res.status(400).send('password require');
  }

  if (username !== 'admin' || password !== 'password') {
    return res.status(401).send('invaild password');
  }

  const authToken = jwt.sign({
    username: username
  }, config.SALT, {
    expiresIn: 60 * 60 * 24 // 24小时
  });

  res.status(200).json({
    message: 'success',
    token: authToken,
  });
};
