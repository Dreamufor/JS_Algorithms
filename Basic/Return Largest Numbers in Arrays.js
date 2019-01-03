// 找出多个数组中的最大数
//
// 右边大数组中包含了4个小数组，分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组。





function largestOfFour(arr) {
  // 请把你的代码写在这里
  var newS= [];

  for(i=0; i<arr.length;i++){
      var largest = 0;
   for(j=0; j<arr[i].length; j++){
     if(arr[i][j] > largest)
       largest = arr[i][j];

   }
    newS.push(largest);
    largest = 0;
  }

  return newS;
}

//largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


