const api = require('./api');

exports.bind = (app) => {
  app.use('/api', api);
};
