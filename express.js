const
  express = require('express')
  , app = express()
  , helmet = require('helmet')
  , router = require('./router')(express)
  , bodyParser = require('body-parser')
  , config = require('./config')
  , PUBLIC_PATH = config.PUBLIC_PATH
;

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
app.use(helmet());

// set api
app.use(PUBLIC_PATH, router);

app.listen(process.env.PORT || 3000);



