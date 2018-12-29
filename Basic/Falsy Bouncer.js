// 删除数组中的所有假值。
//
// 在JavaScript中，假值有false、null、0、""、undefined 和 NaN。



function bouncer(arr) {
    // 请把你的代码写在这里

    return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);