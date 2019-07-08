/* eslint-disable */

// 解构赋值时，如果等号右边不是对象或数组（是数值或布尔值），就将其转换为对象。

/**
*1、数组和Set的解构赋值；
*只要某种数据结构具有Iterator接口都可以采用数组形式的解构赋值；
*数组的元素是按次序排列的，变量的取值由它的位置决定；
*/

let [a, b, c] = [1, 2, 3]; //a=1; b=2; c=3;
let [foo, [[bar], baz]] = [1, [[2], 3]]; //foo=1; bar=2; baz=3;
let [x, , y] = [1,2,3]; //x=1;y=3;
let [head, ...tail] = [1, 2, 3, 4];//head=1;tail=[2, 3, 4]

let [d, e, ...f] = ['a'];//d='a';e=undefined;f=[];
/*解构不成功，变量的值等于undefined*/

let [g] = 1; //报错
/*等号右边是不可遍历的结构，报错*/

let [h, i] = new Set(['a', 'b']);//h='a';i='b';
/*Set的解构赋值*/

/**
*默认值；
*数组解构赋值允许指定默认值；
*默认值生效的条件是，对象的属性值严格等于undefined
*/

let [j = true] = []; //foo=true;
let [k, l = 'b'] = ['a']; //k='a';l='b';
/*当变量严格等于undefined时，会取默认值*/
let [m, n = 1] = [1, undefined];//m=1;n=1;
let [o = 1] = [undefined]; //o=1;
let [p = 1] = [null]; //p=null;

/**
*2、对象的解构赋值；
*对象的属性没有次序，变量必须与属性同名，才能取得
*/

let {q, r} = {q: 'aaa', r: 'bbb'};//q='aaa';r='bbb';
/*变量名和属性名不一致，必须写成下面这样（foo1:abc）*/
let { foo1: abc, c: {foo1} } = { foo1: 'aaa', bar: 'bbb', c: {foo1: 'bbb'} };//abc='aaa';foo1='bbb';
let {s, s: {t}} = {s: {t: 1}};//s={t:1};t=1;

/**
*默认值；
*对象解构赋值也允许指定默认值；
*默认值生效的条件是，对象的属性值严格等于undefined
*/
let {u = 3, v} = {v:1};//u=3;v=1;

/*由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。*/
let arr = [1, 2];// arr结构为 {0: 1, 1: 2};
let {0: fir, 1: las} = arr;// fir=1;las=2;


/**
*3、字符串的解构赋值；
*/

/*字符串被转换成类似数组的对象*/
let [a1, b1, c1] = 'hello';//a1='h';b1='e';c1='l';

/*类似数组的对象有一个length属性，因此还可以对这个属性解构赋值；*/
let {length: len} = 'hello';//len=5;

/**
*4、数值和布尔值的解构赋值；
*/

let {toString: ts, toFixed: tf} = 123;//s=Number.prototype.toString;tf=Number.prototype.toFixed;
let {toString: tst} = true;//tst === Boolean.prototype.toString

/*解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。undefined和null无法转为对象，所以无法对它们进行解构赋值。*/
let { prop:x1 } = undefined;//TypeError
let { prop:x2 } = null;//TypeError

/**
*5、函数参数的解构赋值；
*/
function add([x = 0, y = 0]) {
  return x + y;
}
add([1, 2]);// 3

/*为move函数的参数指定默认值，当参数为undefined时触发默认值；*/
function move({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]

/**
* 6、圆括号问题；
* 只要有可能导致解构的歧义，就不得使用圆括号；
* 建议只要有可能，就不要再模式中放置圆括号；
*/

/*以下三种情况不得使用圆括号*/
//（1）变量声明语句；
let [(aa)] = [1]; //报错
let ({bb: cc}) = {}; //报错
let {dd: ({ee})} = {dd: {ee: 2}}; //报错
//（2）函数参数；函数参数也属于变量声明；
function([(ff)]) { return ff; } //报错
//（3）赋值语句的模式；
([gg]) = [5];
/*可以使用圆括号的情况只有一种*/
//赋值语句的非模式部分
[(hh)] = [5]; // hh=5;
({ ii: (jj)} = {}); //正确,模式是ii，ii不能加括号；

/**
*7、用途；
*/

/*（1）交换变量的值*/

let kk = 1, ll =2;
[kk, ll] = [ll, kk];

/*（2）从函数返回多个值*/

//函数要返回多个值，只能将它们放在数组或对象里返回。
function example() {
  return [1,2,3];
}
let [a,b,c] = example();

function example1() {
  return {
    a: 1,
    b: 2,
  };
}
let [a,b] = example1();

/*（3）函数参数的定义*/

//参数是一组有序的值
function f([x,y,z]) {}
f([1,2,3]);
//参数是一组无序的值
function f({x,y,z}) {}
f({x:1,z:2,y:3});

/*（4）提取JSON数据*/

let jsonData = {
  id: 42,
  status: 'ok'
};
let {id, status} = jsonData;

/*（5）函数参数的默认值*/

//指定参数的默认值，避免在函数体内写var foo = config.foo || 'default foo'这样的语句；
jQuery.ajax = function(url, {async = true, cache = true}) {}

/*（6）遍历Map结构*/

const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}

/*（7）输入模块的指定方法*/

const { SourceMapConsumer, SourceNode } = require("source-map");












