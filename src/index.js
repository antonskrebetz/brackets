const { compare } = require("semver");

module.exports = function check(str, bracketsConfig) {
  let arrStr = str.split('');
  for (let i = 0; i < bracketsConfig.length; i++) {
    let x1 = bracketsConfig[i][0];
    let x2 = bracketsConfig[i][1];
    for (let j = 0; j < str.length; j++) {
      if (arrStr[j] == x1 && arrStr[j+1] == x2) {
        arrStr.splice(j, 2);
        i = -1;
        j = -1;
      }
    }
  }
  return arrStr == 0 ? true : false;
}