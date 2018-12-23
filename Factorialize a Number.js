// 计算一个整数的阶乘
//
// 如果用字母n来代表一个整数，阶乘代表着所有小于或等于n的整数的乘积。
//
// 阶乘通常简写成 n!
//
// 例如: 5! = 1 * 2 * 3 * 4 * 5 = 120

//1. 经典递归来计算阶乘
function factorialize(num) {
  // 请把你的代码写在这里

  if (num>0)
  {
    return num * factorialize(num - 1);
  }
  else{
    return 1;
  }

}

factorialize(5);

//2 use for loop
function factorialize(num) {
  // 请把你的代码写在这里
 var init = 1;
 for(num ; num > 0; num--){
   init *= num;
 }
  return init;
}

factorialize(5);
