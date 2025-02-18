
exports.min = function min(array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  else {
    array.sort((a, b) => a - b);
    return array[0];
  }
}

exports.max = function max(array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  else {
    array.sort((a, b) => b - a);
    return array[0];
  }
}

exports.avg = function avg(array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  else {
    let i = 0;
    let sum = 0;
    while (i < array.length) {
      sum = sum + array[i];
      i = i + 1;
    }
    return (sum / array.length);
  }
}
