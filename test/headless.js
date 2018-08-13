global.window = global;
global.assert = require('chai').assert;
global.fixtures = {
  users: require(''),
};
require('../src/data.js');
require('./data.spec.js');
