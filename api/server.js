const path = require('path');

const express = require('express');
const compression = require('compression');

const app = express();
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3100;
const requestId = require('request-id/express');
const routes = require('./routes');

app.use(requestId({ paramName: 'requestId' }));
app.use(flash());
app.use(cookieParser());
app.use(bodyParser.json({ limit: '256kb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '256kb' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/assets', express.static('assets', { redirect: true }));

app.use(compression());
routes.bind(app);

app.get('*', (req, res) => {
  res.render('index');
});

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', PORT, PORT);
  }
});
