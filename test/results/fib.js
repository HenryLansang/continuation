var fib;
fib = function () {
  var a, current, b;
  a = 0;
  current = 1;
  function _$loop_0(_$loop_0__$cont) {
    if (true) {
      b = a;
      a = current;
      current = a + b;
      setTimeout(function (arguments) {
        console.log(current);
        if (a > 100) {
          return _$loop_0__$cont();
        }
        _$loop_0(_$loop_0__$cont);
      }.bind(this, arguments), 20);
    } else {
      _$loop_0__$cont();
    }
  }
  _$loop_0 = _$loop_0.bind(this);
  _$loop_0(function () {
  });
};
fib();
/* Generated by Continuation.js v0.1.5 */