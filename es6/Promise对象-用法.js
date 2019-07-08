/*eslint-disable*/

/**
*  date: 2017-10-20 10:13:29
*  author: fu.zhang
*  describe: Promise
*/

/* Promise定义： 是异步编程的一种解决方案，比传统的解决方案--回调函数和事件--更合理更强大 */
// Promise是一个容器，里面保存着某个未来会结束的事件（通常是一个异步操作）的结果。
/**
* Promise的特点
*/

// 1、对象的状态不受外界影响；Promise有三种状态：pending，fulfilled、rejected；
// 2、一旦状态改变就不会再变，任何时候都可以得到这个结果；
// 3、无法取消Promise，一旦新建就立即执行，无法中途取消。


/**
* 基本用法
*/

var promise = new Promise(function(resolve, reject) {
  // ...
  if(/* 异步操作成功 */) {
    resolve(value);
  } else {
    reject(error);
  }
});

// 一个用Promise对象事先Ajax操作的例子；
var getJson = function(url) {
  var promise = new Promise(function(resolve, reject) {
    var client = new XMLHttpRequest();
    client.open('GET', url);
    client.onreadystatechange = handler;
    client.responseType = 'json';
    client.sendRequestHeader('Accept', 'application/json');
    client.send();

    function handler() {
      if(this.readyState !== 4) return;
      if(this.status === 200) resolve(this.response);
        else new Error(this.statusText);
    }
  });

  return promise;
}

/**
* Promise.prototype.then()
*/

getJson('/posts.json').then(function(res) {
  return res.json();
}).then(function(ret) {
  console.log(ret);
});

/**
* Promise.prototype.catch()
*/

getJson('/posts.json').then(function(res) {
  return res.json();
}).catch(function(error) {
  console.log(error);
});

/**
* Promise.all()
* Promise.all方法用于将多个Promise实例包装成一个新的Promise实例。
*/

var p = Promise.all([p1, p2, p3]);

//只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数；
//只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值会传递给p的回调函数；

var promises = [1,2,3,4].map(function(id) {
  return getJson(promises).then(function(posts) {
    // ...
  }).catch(function(error) {
    // ...
  });
});


/**
* Promise.race()
* Promise.race方法同样是将多个Promise实例包装成一个新的Promise实例；
*/

var p = Promise.race([p1,p2,p3]);

// 只要p1、p2、p3中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的Promise实例的返回值就传递给p的回调函数。


/**
* Promise.resolve()
* 将现有对象转为Promise对象；
*/

var jsPromise = Promise.resolve($.ajax('/get.json'));

// 1、参数是一个Promise实例，那么Promise.resolve将不做任何修改、原封不动的返回这个实例；
// 2、参数是一个thenable对象；thenable对象指的是具有then方法的对象，Promise.resolve方法会将这个对象转为Promise对象，
// 然后立即执行thenable对象的then方法。
let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};

let p1 = Promise.resolve(thenable);
p1.then(function(value) {
  console.log(value);  // 42
});

// 3、参数不是具有then方法的对象，或者根本不是对象，则Promise.resolve方法会返回一个新的Promise对象，状态为resolved，并返回参数；
// 4、不带任何参数，直接返回一个resolved状态的Promise对象。

var p = Promise.resolve();
p.then(function() {});

// 立即resolve的Promise对象，是在本轮‘时间循环’的结束时，而不是在下一轮‘时间循环’的开始时。
setTimeout(function () {
  console.log('three');
}, 0);

Promise.resolve().then(function () {
  console.log('two');
});

console.log('one');

// one
// two
// three
// 上面代码中，setTimeout(fn, 0)在下一轮“事件循环”开始时执行，Promise.resolve()在本轮“事件循环”结束时执行，console.log('one')则是立即执行，因此最先输出。

/**
* Promise.reject()
* 返回一个新的Promise实例，该实例的状态为rejected；
*/
var p = Promise.reject('出错了');
// 等同于
var p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
  console.log(s)
});
// 出错了























