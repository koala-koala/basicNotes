function quickSort(arr) {
  const base = arr[0];
  if (arr.length === 0) return arr;
  const low = [];
  const high = [];
  arr.forEach(a => {
    if (a > base) high.push(a);
    if (a < base) low.push(a);
  });
  return [].concat(quickSort(low), [base], quickSort(high));
}
const res = quickSort([2, 1, 5, 20, 3, 37, 13]);
console.log(res);
