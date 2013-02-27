module.exports = function(opts) {
  return function(resultSoFar, n) {
    if(n === opts.magicNumber)
      return opts.result;
    return resultSoFar;
  };
};