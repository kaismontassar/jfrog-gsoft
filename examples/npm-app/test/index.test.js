const test = require('node:test');
const assert = require('node:assert/strict');
const { normalizeQuantity } = require('../index');

test('accepts numbers and numeric strings', () => {
  assert.equal(normalizeQuantity(0), 0);
  assert.equal(normalizeQuantity('12.5'), 12.5);
});

test('rejects invalid quantities', () => {
  for (const value of [-1, '', 'invalid', null, undefined, Infinity]) {
    assert.throws(() => normalizeQuantity(value), TypeError);
  }
});
