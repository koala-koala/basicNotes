var name = "1";
function foo() {
  var name = "2";
  console.log(this.name);
}
// foo();

const poo = () => {
  var name = "2";
  console.log(this.name);
};

poo();
