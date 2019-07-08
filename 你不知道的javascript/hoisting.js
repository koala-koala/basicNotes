// var a = 1;
// (function() {
//   console.log(a);
//   var a = 2;
// })();

// var a = 1;
// (function() {
//   console.log(a);
//   let a = 2;
// })();

var x = 1;
function foo(x = x) {
  console.log(x);
}
foo();

// console.log(foo);

// var foo = function bar() {
//   console.log("foo...");
//   console.log(bar);
// };

// console.log(foo);

// foo();

// foo();
// function foo() {
//   console.log("1");
// }
// function foo() {
//   console.log("2");
// }
// foo();
