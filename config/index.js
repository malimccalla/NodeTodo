const configValues = require('./config.json');

module.exports = {
  getDbConnectionString: `mongodb://${configValues.username}:${configValues.password}@ds053126.mlab.com:53126/mynotesapp`
};
