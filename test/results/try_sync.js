var x;
try {
  x = 1;
} catch (e) {
  x = 2;
}
x = 3;
setTimeout(function (arguments) {
}.bind(this, arguments), 10);
/* Generated by Continuation.js v0.1.4 */