var assert = require('chai').assert;
var utils = require('../src/js/admin.js');

describe('Utils', function() {
  it('adds listener events', function() {
    sinon.spy(document, 'addEventListener');
    expect(document.addEventListener.event).to.be.true;
  });
});

// No corre el test firebase is not defined