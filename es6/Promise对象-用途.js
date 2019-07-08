/*eslint-disable*/

/**
 * 两个有用的附加方法
 */

// done()
// Promise对象的回调链，不管以then方法或者catch方法结尾，要是最后一个方法抛出错误，都可能无法捕捉到。
// 因此，我们可以提供一个done方法，总是处于回调链的尾端，保证抛出任何可能出现的错误。

Promise.prototype.done = function(onFulfilled, onRejected) {
  this.then(onFulfilled, onRejected).catch(function(reason) {
    // 抛出一个全局错误
    setTimeout(() => {
      throw reason;
    }, 0);
  });
};

asyncFunc()
  .then(f1)
  .catch(r1)
  .then(f2)
  .done();

// finally()
// finally方法用于指定不管Promise对象最后状态如何，都会执行的操作。他与done最大的区别是它接受一个普通的
// 回调函数作为参数，该参数不管怎样都必须执行。

Promise.prototype.finally = function(callback) {
  let P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason =>
      P.resolve(callback()).then(() => {
        throw reason;
      })
  );
};

/**
 * 应用
 */

/**
 * 加载图片：将图片加载写成一个Promise，一旦加载完成，Promise的状态就发生变化；
 */
const preloadImg = function(path) {
  return new Promise(function(resolve, reject) {
    var image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = path;
  });
};

/**
 * Generator函数与Promise的结合
 */

/**
 * Promise.try()
 * 让同步函数同步执行，异步函数异步执行，并且让它们具有统一的 API
 */

const f = () => console.log("now");
Promise.try(f);
console.log("next");
// now
// next
