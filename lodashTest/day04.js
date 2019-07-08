/**
 *
 * @param {*} array
 */
const head = array => {
  if (array !== null && array.length) return array[0];
  return undefined;
};

/**
 *
 * @param {*} array
 */
const flatten = array => {
  let arr = [];
  if (array !== null && array.length) {
    return array.forEach(t => {
      if (Object.prototype.toString.call(t) === "[object Array]") {
        arr.push(...t);
        return;
      }
      arr.push(t);
    });
  }
  return arr;
};

/**
 *
 * @param {*} array
 * @param {*} res
 */
const flattenDeep = (array, res = []) => {
  let result = res;
  if (array !== null && array.length) {
    array.forEach(t => {
      if (Object.prototype.toString.call(t) === "[object Array]") {
        flattenDeep(t, result);
        return;
      }
      result.push(t);
    });
  }
  return result;
};

/**
 *
 * @param {*} array
 * @param {*} depth
 * @param {*} res
 */
const flattenDepth = (array, depth = 1, res = []) => {
  let result = res;
  if (array !== null && array.length) {
    array.forEach(t => {
      if (depth > 0) {
        if (Object.prototype.toString.call(t) === "[object Array]") {
          if (depth > 1) {
            flattenDepth(t, depth - 1, result);
            return;
          }
          result.push(...t);
        } else {
          result.push(t);
        }
      } else {
        result.push(t);
      }
    });
  }
  return result;
};

/**
 * 数组转换成对象
 * @param {*} pairs
 */
const fromPairs = pairs => {
  let result = {};
  if (pairs !== null && pairs.length) {
    for (pair of pairs) {
      if (pair !== null) {
        result[pair[0]] = pair[1];
      }
    }
  }
  return result;
};
console.log(fromPairs([["a", 1], ["b", 2]]));
