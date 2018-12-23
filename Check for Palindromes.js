// 检查回文字符串
//
// 如果给定的字符串是回文，返回true，反之，返回false。
//
// 如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。
//
// 注意你需要去掉字符串多余的标点符号和空格，然后把字符串转化成小写来验证此字符串是否为回文。


function palindrome(str) {
  // 请把你的代码写在这里
  re = /[\W_]/g;
  var strNew = str.replace(re,'');//替换掉各类符号
  var str1 = strNew.toLowerCase();//全部换成小写
  var str2 = str1.split("").reverse().join("");// resevrse a string;
  if(str1 === str2) {
    return true;
  }
  else{
    return false;
  }

}

palindrome("race car");
