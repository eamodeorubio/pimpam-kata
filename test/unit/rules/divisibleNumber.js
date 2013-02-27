var divisibleNumberRule = require('../../../lib/rules/divisibleNumber'),
    expect = require('chai').expect;

describe('A DivisibleNumber rule', function() {
  context('configured with divisor 7 and result "John"', function() {
    var rule;
    beforeEach(function() {
      rule = divisibleNumberRule({result: "John", divisor: 7});
    });

    it('when executed with current result "ZZZ" and number 1 will return "ZZZ"', function() {
      expect(rule('ZZZ', 1)).to.be.equal('ZZZ');
    });

    it('when executed with current result "ZZZ" and number 7 will return "ZZZJohn"', function() {
      expect(rule('ZZZ', 7)).to.be.equal('ZZZJohn');
    });

    it('when executed with current result "XXX" and number 14 will return "XXXJohn"', function() {
      expect(rule('XXX', 14)).to.be.equal('XXXJohn');
    });
  });
});