module.exports = function longestConsecutiveLength(array) {
  if (array.length < 2) return array.length;

  const arr = array.slice().sort((a, b) => a - b);
  let result = 0, count = 1;

  for (let i = 1, len = arr.length; i < len; i++) {
      let diff = arr[i] - arr[i - 1];
      if ( diff == 1 ) count++;
      else if ( diff > 1 ) {
        result = count > result ? count : result;
        count = 1;
      }
  }

  return result;
}
