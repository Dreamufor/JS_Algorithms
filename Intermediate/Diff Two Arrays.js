// 比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。


function diff(arr1, arr2) {
    return arr1.filter(function(num){
          return arr2.indexOf(num) < 0;
      }).concat(arr2.filter(function(num){
          return arr1.indexOf(num) < 0;
      }));
  }
  
  diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);