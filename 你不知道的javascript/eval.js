function foo() {
  var a = 1;
  function B() {
    a = 2;
  }
  B();
  console.log(a);
}
foo();
