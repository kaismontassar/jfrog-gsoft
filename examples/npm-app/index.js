const isNumber = require('is-number');

function normalizeQuantity(value) {
  if (!isNumber(value) || Number(value) < 0) {
    throw new TypeError('Quantity must be a non-negative number');
  }
  return Number(value);
}

module.exports = { normalizeQuantity };
