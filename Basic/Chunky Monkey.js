// 猴子吃香蕉, 分割数组
//
// （猴子吃香蕉可是掰成好几段来吃哦）
//
// 把一个数组arr按照指定的数组大小size分割成若干个数组块。
//
// 例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];
//
// chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];



function chunk(arr, size) {
    // 请把你的代码写在这里
    var n = arr.length%size;
    var s;
    var newS = [];
    var last = arr.slice(arr.length - n,arr.length);
    for(i=0; i<arr.length-n;i+=size){
        s = arr.slice(i, i+size);
        newS.push(s);
    }
    if(n>0){
        newS.push(last);
    }
    return newS;
}
//chunk(["a", "b", "c", "d"], 2);
chunk([0, 1, 2, 3, 4, 5], 4);