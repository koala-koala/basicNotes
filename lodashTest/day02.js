export const difference = (array, ...values) => {
  // values第一层拍平得到新的values
  // 外层遍历array，内层遍历values，判断不在values里面则用arr接收，最后得到新的数组
};

export const differenceBy = (array, ...values) => {
  // 获取values的最后一个参数，iteratee
  // values第一层拍平得到新的values
  // 外层遍历iteratee处理后的array，内层遍历iteratee处理后的values，判断不在values里面则用arr接收，最后得到新的数组
};

export const differenceWith = (array, ...values) => {
  // 获取values的最后一个参数，comparator
  // values第一层拍平得到新的values
  // 外层遍历array，内层遍历values，判断不在comparator(target, value)为true，arr接收target，最后得到新的数组
};

export const drop = (array, n = 1) => {
  // drop([1,2,3], 1) => [2, 3]
  // slice(array, n, array.length)
};

export const dropRight = (array, n = 1) => {
  // dropRight([1,2,3], 1) => [1,2]
  // slice(array, 0, length - n)
};
