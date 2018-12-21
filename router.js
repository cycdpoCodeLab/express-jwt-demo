const
  expressJwt = require('express-jwt')
  , login = require('./src/login')
  , user = require('./src/user')
  , config = require('./config')
;

module.exports = (express) => {
  const router = express.Router();

  // 使用中间件验证token合法性
  router.use(expressJwt({
    secret: config.SALT
  })
    .unless({
      path: [
        '/',
        '/login',
      ]
    }));

  //拦截器
  router.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('invalid token');
    }
  });

  router.use('/', express.static('static'));
  router.post('/login', login);
  router.post('/user', user);

  return router;
};

