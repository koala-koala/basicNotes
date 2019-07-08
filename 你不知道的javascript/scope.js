// "use strict";
/**
 * 1、js代码以什么为单位编译成AST，一行代码？一个作用域？一个文件？
 */
/**
 * 2、对未声明的变量进行赋值的时候，如何声明全局变量，会改变全局作用域的AST结构吗？是执行b=3时发现b未声明然后去编译声明b为全局变量，再执行b=3吗？
 */
var x = "global";
function foo() {
  b = 3;
  // var a = 2;
  // function inner() {
  //   b = 3;
  // }
  // inner();
  // console.log("inner2", b);
}
console.log("foo1", b);
foo();
// b = 4;
console.log("foo2", b);

console.log(a);
var a = 1;

/**
 * eval、with
 * 相当于运行的时候插入了代码，那代码在什么时候进行词法分析、编译，会重新改变AST结构？
 */
