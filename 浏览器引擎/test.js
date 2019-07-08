function synchronizedCode() {
  var last = new Date().getTime();
  var count = 0;
  while (true) {
      var now = new Date().getTime();
      if (now - last > 1000 * 2) {
          last = now;
          count++;
          console.log('the %dth count.',count);
      }
      if (count > 9) {
          console.log('exist while.');
          break;
      }
  }
}
(function() {
  setTimeout(function() {console.log('setTimeout 0 occured first.');},0);
  setTimeout(function() {console.log('setTimeout 0 occured second.');},0);

  synchronizedCode();
})();