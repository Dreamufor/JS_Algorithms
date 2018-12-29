// 比较字符串
//
// （蛤蟆可以吃队友，也可以吃对手）
//
// 如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true。
//
// 举例，["hello", "Hello"]应该返回true，因为在忽略大小写的情况下，第二个字符串的所有字符都可以在第一个字符串找到。
//
// ["hello", "hey"]应该返回false，因为字符串"hello"并不包含字符"y"。
//
// ["Alien", "line"]应该返回true，因为"line"中所有字符都可以在"Alien"找到。



//str.indexOf(searchValue[, fromIndex])
//indexOf() 方法返回调用  String 对象中第一次出现的指定值的索引，开始在 fromIndex进行搜索。

function mutation(arr) {
    // 请把你的代码写在这里
    var s1 = arr[0].toLowerCase();
    var s2 = arr[1].toLowerCase();
    var n=0;
    for(i=0; i<s2.length;i++)
    {
        if((s1.indexOf(s2[i]) !== -1) === true){
            n++;
        }
    }
    if(n == s2.length)
    {
        return true;
    }
    else{
        return false;
    }

}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);