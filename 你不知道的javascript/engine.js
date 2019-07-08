// var x = 1;

// function A(y) {
//   var x = 2;
//   function B(z) {
//     console.log(x + y + z);
//   }
//   return B;
// }

// var c = A(1);
// C(1);
function A() {
  var a = 1;
  function B(obj) {
    with (obj) {
      a = 2;
    }
    console.log(obj, obj.a, a);
  }
  var o1 = {
    c: 3
  };
  B(o1);
  console.log("a", a);
}

A();
