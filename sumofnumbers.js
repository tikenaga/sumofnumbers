function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}
function sumWhile(list) {
  let sum = 0;
  let loop = 0;
  while (loop < list.length) {
    sum += list[loop];
    loop++;
  }
  return sum;
}
function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list.pop() + sumRecursion(list);
}
function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

const nums = [1, 2, 3, 4, 5];
console.log(sumFor(nums));
console.log(sumWhile(nums));
console.log(sumRecursion(nums));
console.log(sumTheSimpleWay(nums));
