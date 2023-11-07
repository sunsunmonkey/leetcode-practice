/**
 * @param {string} str
 * @param {number} n
 * @returns {string}
 */
var leftRotateString = function (str: string, n: number) {
  let strArr = str.split("");
  const beforeArr = strArr.slice(0, n);
  const afterArr = strArr.slice(n);
  reverseString(beforeArr);
  reverseString(afterArr);
  strArr = beforeArr.concat(afterArr);
  reverseString(strArr);
  return strArr.join("");
};

function reverseString(str: string[]) {
  str.reverse();
}
