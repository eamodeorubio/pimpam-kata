var magicNumberRule = require('../../../lib/rules/magicNumber'),
    expect = require('chai').expect;

describe('A MagicNumber rule', function() {
  context('configured with magic number "33" and result "John"', function() {
    var rule;
    beforeEach(function() {
      rule = magicNumberRule({result: "John", magicNumber: 33});
    });

    it('when executed with current result "ZZZ" and number 1 will return "ZZZ"', function() {
      expect(rule('ZZZ', 1)).to.be.equal('ZZZ');
    });

    it('when executed with current result "ZZZ" and number 33 will return "John"', function() {
      expect(rule('ZZZ', 33)).to.be.equal('John');
    });
  });
});