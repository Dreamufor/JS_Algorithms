// 凯撒密码
//
// （让上帝的归上帝，凯撒的归凯撒）
//
// 下面我们来介绍风靡全球的凯撒密码Caesar cipher，又叫移位密码。
//
// 移位密码也就是密码中的字母会按照指定的数量来做移位。
//
// 一个常见的案例就是ROT13密码，字母会移位13个位置。由'A' ↔ 'N', 'B' ↔ 'O'，以此类推。
//
// 写一个ROT13函数，实现输入加密字符串，输出解密字符串。
//
// 所有的字母都是大写，不要转化任何非字母形式的字符(例如：空格，标点符号)，遇到这些特殊字符，跳过它们




function rot13(str) { // LBH QVQ VG!
  // 请把你的代码写在这里
  var newString = [];
  var n = 0;
  var s = [];
  for(i=0; i<str.length; i++){
    if((str.charCodeAt(i)>=34) && (str.charCodeAt(i)<=59))
      {
        n =(str.charCodeAt(i) + 13);
      }
      else
      {
        n = str.charCodeAt(i);
      }
    newString.push(n);

  }
  for(j = 0; j < newString.length; j++){
    var m  = String.fromCharCode(newString[j]);
    s.push(m);
  }
  return s.join("");
}

rot13("SERR PBQR PNZC");  // 你可以修改这一行来测试你的代码
