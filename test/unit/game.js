var game = require('../../lib/game'),
    chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon');

chai.use(require('sinon-chai'));

describe('A Game', function() {
  context('configured with rules X and Y (in that order)', function() {
    var aGame, ruleX, ruleY;
    beforeEach(function() {
      ruleX = sinon.stub();
      ruleY = sinon.stub();
      aGame = game([
        ruleX,
        ruleY
      ]);
    });

    describe('when is executed against number 10', function() {
      var result, ruleXResult, ruleYResult;
      beforeEach(function() {
        ruleXResult = 'XXX';
        ruleX.returns(ruleXResult);
        ruleYResult = 'YYY';
        ruleY.returns(ruleYResult);
        result = aGame(10);
      });

      it('will call once rule X with 10 and current result ""', function() {
        expect(ruleX).to.have.been.calledOnce;
        expect(ruleX).to.have.been.calledWith('', 10);
      });

      it('will call once rule Y with 10 and the result of rule X', function() {
        expect(ruleY).to.have.been.calledOnce;
        expect(ruleY).to.have.been.calledWith(ruleXResult, 10);
      });

      it('will return the result of rule Y', function() {
        expect(result).to.be.equal(ruleYResult);
      });
    });
  });
});