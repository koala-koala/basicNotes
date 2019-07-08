/**
 * 返回首次在数组array中被找到的索引值，如果fromIndex为负数，则反向查找
 * @param {*} array
 * @param {*} value
 * @param {*} fromIndex
 */
const indexOf = (array, value, fromIndex = 0) => {
  const len = array.length;
  let res = -1;

  if (!len) return res;

  if (fromIndex > 0) {
    for (let i = fromIndex; i++; i < len - 1) {
      if (array[i] === value) {
        res = i;
        break;
      }
    }
  } else {
    for (let i = len - 1; i--; i > Math.abs(fromIndex)) {
      if (array[i] === value) {
        res = i;
        break;
      }
    }
  }
  return res;
};

// console.log(indexOf([1, 2, 1, 2], 2, -2));

/**
 * 返回数组array除了最后一个元素之外的所有元素
 * @param {*} array
 */
const initial = array => {
  return array.length ? array.slice(0, array.length - 1) : [];
};

// console.log(initial([1, 2, 3]));

/**
 * 返回所有数组的交集
 * @param {*} arrays
 */
const intersection = (...arrays) => {
  let obj = {};
  let res = [];

  arrays.map(arr => {
    arr.map(value => {
      obj[value] = obj[value] ? obj[value] + 1 : 1;
    });
  });
  console.log(obj);
  Object.keys(obj).map(key => {
    if (obj[key] === arrays.length) res.push(key);
  });

  console.log(res);

  return res;
};
intersection([2, 1], [4, 2], [1, 2]);

const intersectionBy = params => {};

const intersectionWith = params => {};
