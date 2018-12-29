// 找出最长单词
//
// 在句子中找出最长的单词，并返回它的长度。
//
// 函数的返回值应该是一个数字。

function findLongestWord(str) {
  // 请把你的代码写在这里
  var string = str.split(" ");
  var largest = 0;

  for(i=0; i<string.length;i++){

    if(string[i].length > largest){
      largest = string[i].length;
    }
  }
  return largest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
