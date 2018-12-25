

// 数组排序并找出元素索引
//
// 我身在何处？
//
// 先给数组排序，然后找到指定的值在数组的位置，最后返回位置对应的索引。

function where(arr, num) {
    // 请把你的代码写在这里
    function compare(a, b){
        return a -b;
    }
    arr.push(num);
    arr.sort(compare);
    return arr.indexOf(num);
}

where([3, 10, 5], 3);