// 摧毁数组
//
// 金克斯的迫击炮！
//
// 实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值。


function destroyer(arr) {
    // 请把你的代码写在这里
    var arr_arg = arguments;

    for(var i = 1; i < arr_arg.length; i++){
        arr = arr.filter(function(val){
            return arr_arg[i] !== val;
        });
    }


    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

