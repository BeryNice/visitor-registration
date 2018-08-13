describe('newVisitor', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof newVisitor, 'object');
  });
});

describe('takepicture', () => {

  it('debería ser una función', () => {
    assert.equal(typeof takepicture, 'function');
  });
});

describe('templateVisitors', () => {

  it('debería ser una función', () => {
    assert.equal(typeof templateVisitors, 'function');
  });
});
