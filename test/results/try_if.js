(function (_$cont) {
  try {
    (function (_$cont) {
      try {
        if (true) {
          setTimeout(function (arguments) {
            try {
              console.log('throw err');
              throw 'Err';
              _$cont();
            } catch (_$err) {
              _$cont(_$err);
            }
          }.bind(this, arguments), 100);
        } else {
          throw 'Else Err';
          _$cont();
        }
      } catch (_$err) {
        _$cont(_$err);
      }
    }(function (_$err) {
      try {
        if (_$err !== undefined)
          return _$cont(_$err);
        console.log('after if');
        _$cont();
      } catch (_$err) {
        _$cont(_$err);
      }
    }));
  } catch (_$err) {
    _$cont(_$err);
  }
}(function (err) {
  if (err !== undefined) {
    console.log(err);
  }
  console.log('Done');
}));
/* Generated by Continuation.js v0.1.4 */