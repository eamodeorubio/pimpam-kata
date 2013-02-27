var divisibleNumberRule = require('./rules/divisibleNumber'),
    magicNumberRule = require('./rules/magicNumber');

module.exports = [
  divisibleNumberRule({result: 'Pim', divisor: 3}),
  divisibleNumberRule({result: 'Pam', divisor: 5}),
  divisibleNumberRule({result: 'Pum', divisor: 2}),
  magicNumberRule({result: 'Toma', magicNumber: 60}),
  magicNumberRule({result: 'Gominolas', magicNumber: 180})
];