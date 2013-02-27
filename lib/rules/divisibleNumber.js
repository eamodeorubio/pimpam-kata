module.exports = function(opts) {
  return function(resultSoFar, n) {
    if(n % opts.divisor === 0)
      return resultSoFar + opts.result;
    return resultSoFar;  
  };
};