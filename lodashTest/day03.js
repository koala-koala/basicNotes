/**
 * dropRightWhile([array, [predicate]])
 * predicate可为func/array/object/string
 * 从array右侧裁剪，直到predicate为假值
 * 判断predicate真假通过_.matches,_.matchesProperty,_.property判断
 */
function dropRightWhile(array, predicate) {
  let index = array.length - 1;
  if (typeof a === "function") {
    for (let i = index; i >= 0; i -= 1) {
      if (!predicate(arr)) index = i;
    }
  }
  // array _.matchesProperty ['active', false]
  // object _.matches { user: "barney", active: true }
  // string _.property 'active'
  array.slice(array, 0, index);
}

/**
 * dropRightWhile([array, [predicate]])
 * predicate可为func/array/object/string
 * 从array左侧裁剪，直到predicate为假值
 * 判断predicate真假通过_.matches,_.matchesProperty,_.property判断
 */
function dropWhile(array, predicate) {}

/**
 *
 * @param {*} array
 * @param {*} value
 * @param {*} start
 * @param {*} end
 * 从start到end填充值value
 */
function fill(array, value, start = 0, end) {
  if (!array || !array.length) {
    return [];
  }
  let endd = end || array.length - 1;
  array.map((arr, index) => {
    return index >= start || index < end ? value : arr;
  });
}

/**
 *
 * @param {*} array
 * @param {*} predicate
 * @param {*} fromIndex
 * 从array索引为fromIndex开始查找predicate为true的值的index
 */
function findIndex(array, predicate, fromIndex = 0) {
  array.forEach((arr, i) => {
    if (i > fromIndex && predicate(arr)) return i;
  });
}

/**
 *
 * @param {*} array
 * @param {*} predicate
 * @param {*} fromIndex
 * 从array fromIndex开始向左查找predicate为true的值的index
 */
function findLastIndex(array, predicate, fromIndex) {
  let fromIndexx = fromIndex || array.length - 1;
  for (let i = fromIndexx; i >= 0; i -= 1) {
    if (predicate(array[i])) return i;
  }
}
