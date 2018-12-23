// 句中单词首字母大写
//
// 确保字符串的每个单词首字母都大写，其余部分小写。
//
// 像'the'和'of'这样的连接符同理。



function titleCase(str) {
  // 请把你的代码写在这里
  var newStr = str.split(" ");
  for(var i=0; i<newStr.length; i++){
    newStr[i] = newStr[i].slice(0, 1).toUpperCase() + newStr[i].slice(1).toLowerCase();
  }
  return newStr.join(" ");

}

titleCase("I'm a little tea pot");
