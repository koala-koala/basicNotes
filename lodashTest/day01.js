const isArray = arg => {
  return Object.prototype.toString.call(arg) === "[object Array]";
};
/**
 *  date: 2018-12-07 16:32:54
 *  author: fu.zhang
 *  describe: chunk([1,2,3,4], 3)
 */
const chunk = (array, size) => {
  // 非数组或长度为0或者size错误
  if (!isArray(array) || !array.length || !size) return [];

  const length = array.length;
  const len = Math.ceil(length / size);
  let res = [];
  for (let i = 0; i < len; i++) {
    res.push(array.slice(i * size, (i + 1) * size));
  }
  return res;
};

/**
 *  date: 2018-12-07 16:43:49
 *  author: fu.zhang
 *  describe: compact([1,'',undefined,2,'foo',false])
 */
const compact = array => {
  // 非数组或长度为0
  if (!isArray(array) || !array.length) return [];

  return array.filter(v => v === 0 || v);
};

/**
 *  date: 2018-12-07 16:57:59
 *  author: fu.zhang
 *  describe: concat([1,2,3], 2, [3,4], [[4]])
 */
const concat = (...args) => {
  let head = args[0];
  let length = args.length - 1;
  let res = [...head];
  for (let i = 0; i < length; i++) {
    const item = args[i + 1];
    if (isArray(item)) {
      let j = 0;
      while (j++ < item.length) {
        res.push(item[j - 1]);
      }
    } else {
      res.push(args[i + 1]);
    }
  }
  console.log(res);
  return res;
};
chunk([1, 2, 3, 4], 3);
compact([1, "", undefined, 2, "foo", false]);
concat([1, 2, 3], 2, [3, 4], [[4]]);
