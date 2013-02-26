var expect = require('chai').expect;


function pimpam() {
  return '';
}

describe('PimPam Game (an extended version of FizzBuzz)', function() {
  context('Not divisible either by 3 or 5 returns empty string', function() {
    it('Number 1', function() {
      expect(pimpam(1)).to.be.equal('');
    });
  });
});