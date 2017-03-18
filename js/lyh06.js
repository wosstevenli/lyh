//匿名函数和闭包
//普通函数
/* function box(){
	return "LEE";
}
alert(box()); */

//匿名函数
/* function(){		//单独的匿名函数是无法运行，且无法调用
	return "LEE";
} */

//把匿名函数赋值给变量
/* var a=function(){
	return "LEEE";
}
alert(a); */

//通过自我执行来执行匿名函数
/* (function(){		//(匿名函数)();第一个()放匿名函数，第二个()执行
	alert("LEEEE");
})(); */

//把匿名函数自我执行的返回值赋值给变量
/* var a=(function(){
return "LEEE";
})();
alert(a); */

//自我执行后用alert打印
/* alert((function(){
	return "LEEEEEE";
})()); */

//自我执行匿名函数的传参
/* (function(age){
	alert(age);
})(100); */

//函数里放一个匿名函数
/* function box(){	
	return function(){		//闭包
		return "LEE";
	}
}
//alert(box);
//alert(box());
alert(box()()); */

//使用匿名函数实现局部变量驻留内存中从而实现累加
/* function box(){
	var age=100;
	return function(){
		age++;
		return age;
	};
}

var b=box();
alert(b());
alert(b());
alert(b());
alert(b());
b=null;		//解除引用 */

