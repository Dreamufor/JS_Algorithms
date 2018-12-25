// Reverse a String

// 先把字符串转化成数组，
//再借助数组的reverse方法翻转数组顺序，
//最后把数组转化成字符串
// 你的结果必须得是一个字符串



function reverseString(str) {

  var array = str.split("");

  array.reverse();

  str = array.join("");

  return str;
}

reverseString("hello");


//更简洁版
function reverseString(str) {
    // 请把你的代码写在这里
    return str && str.split('').reverse().join('');
}

reverseString("hello");