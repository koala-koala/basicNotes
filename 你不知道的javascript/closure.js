function kun() {
  var result = [];
  for (var i = 0; i < 10; i++) {
    result[i] = (function(n) {
      return function() {
        return n;
      };
    })(i);
  }
  return result;
}

let r = kun();
r.forEach(fn => {
  console.log("fn", fn());
});



