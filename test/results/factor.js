var factor;
factor = function (n, callback) {
  var rest;
  if (n == 0) {
    return callback(1);
  }
  factor(n - 1, function (arguments, _$param0) {
    rest = _$param0;
    setTimeout(function (arguments) {
      console.log(rest);
      callback(n * rest);
    }.bind(this, arguments), 50);
  }.bind(this, arguments));
};
factor(6, function (arguments) {
}.bind(this, arguments));
/* Generated by Continuation.js v0.1.5 */