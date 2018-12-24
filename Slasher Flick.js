// 截断数组
//
// 返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始。

//array.splice(start[, deleteCount[, item1[, item2[, ...]]]])


function slasher(arr, howMany) {
    // 请把你的代码写在这里
    if(howMany >= arr.length){
        return [];
    }
    else
    {
        if(howMany > 0){
            var rest = arr.splice(howMany , arr.length-howMany);
            return rest;

        }
        else{
            return arr;
        }
    }

}

slasher(["burgers", "fries", "shake"], 1);


