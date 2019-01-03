// 检查回文字符串
//
// 如果给定的字符串是回文，返回true，反之，返回false。
//
// 如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。
//
// 注意你需要去掉字符串多余的标点符号和空格，然后把字符串转化成小写来验证此字符串是否为回文。


// /[^A-Za-z0–9]/g  or
// /[\W_]/g
// \W removes all non-alphanumeric characters:

// \W matches any non-word character
// \W is equivalent to [^A-Za-z0–9_]
// \W matches anything that is not enclosed in the brackets

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


// Check for Palindromes With a FOR loop

function palindrome(str) {
  // Step 1. The first part is the same as earlier
  var re = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
  str = str.toLowerCase().replace(re, '');
 
  // Step 2. Create the FOR loop
  var len = str.length; // var len = "A man, a plan, a canal. Panama".length = 30
  
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) { // As long as the characters from each part match, the FOR loop will go on
        return false; // When the characters don't match anymore, false is returned and we exit the FOR loop
    }
  }
  return true; // Both parts are strictly equal, it returns true => The string is a palindrome
 }
 
 palindrome("A man, a plan, a canal. Panama");