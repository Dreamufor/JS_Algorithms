//substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符
//stringObject.substr(start,length)
//start:必需。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。
// 也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return (str.substr(-target.length)===target);
}

confirmEnding("Bastian", "n");