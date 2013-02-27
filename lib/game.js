var PimPamRuleSet = require('./pimPamRules');

module.exports = function(rules) {
  rules = rules || PimPamRuleSet;
  return function(n) {
    return rules.reduce(function(result, rule) {
      return rule(result, n);
    }, '');
  };
};