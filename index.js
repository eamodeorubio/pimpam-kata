var expect = require('chai').expect;


function pimpam(n) {
  if(n % 3 === 0)
    return 'Pim';
  if(n % 5 === 0)
    return 'Pam';
  return '';
}

describe('PimPam Game (an extended version of FizzBuzz)', function() {
  context('Not divisible either by 3 or 5 returns empty string', function() {
    it('Number 1', function() {
      expect(pimpam(1)).to.be.equal('');
    });
  });

  context('Divisible by 3 returns Pim', function() {
    it('Number 3', function() {
      expect(pimpam(3)).to.be.equal('Pim');
    });

    it('Number 6', function() {
      expect(pimpam(6)).to.be.equal('Pim');
    });
  });

  context('Divisible by 5 returns Pam', function() {
    it('Number 5', function() {
      expect(pimpam(5)).to.be.equal('Pam');
    });
  });
});