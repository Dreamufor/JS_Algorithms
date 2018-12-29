// 将给定的数字转换成罗马数字。

// 所有返回的 罗马数字 都应该是大写形式。

// This one is quite difficult that I just google and get it.


function convert(num) {
    var aArray = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
	var rArray = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
	var str = "";
	for(var i = 0; i < aArray.length; i++){
		while(num >= aArray[i]){
			str += rArray[i];
			num -= aArray[i];
		}
	}
	//console.log(str);
    return str;
}

convert(36);