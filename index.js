var expect = require('chai').expect;


function pimpam(n) {
  function resultIfDivisibleBy(result, divisor) {
    if(n % divisor === 0)
      return result;
    return '';  
  }

  return resultIfDivisibleBy('Pim', 3) + 
          resultIfDivisibleBy('Pam', 5) +
          resultIfDivisibleBy('Pum', 2);
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

    xit('Number 6', function() {
      expect(pimpam(6)).to.be.equal('Pim');
    });
  });

  context('Divisible by 5 returns Pam', function() {
    it('Number 5', function() {
      expect(pimpam(5)).to.be.equal('Pam');
    });
  });

  context('Divisible by 3 and 5 returns PimPam', function() {
    it('Number 15', function() {
      expect(pimpam(15)).to.be.equal('PimPam');
    });
  });

  context('Divisible by 2 returns Pum', function() {
    it('Number 2', function() {
      expect(pimpam(2)).to.be.equal('Pum');
    });
  });
});