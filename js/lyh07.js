//BOM对象
/* 1：Window对象是最顶层的对象
2：Window对象有6大属性，并且也是对象
3：Window对象下的document对象有5大属性，也是对象

调用

Window的属性和方法的调用：Window.属性，Window.方法()
或者省略Window
 */

 //系统对话框
 //confirm("请！"); 	//确认按钮，本身方法可以返回一个布尔值
					//如果点击确定返回true，点击取消返回false

/* if(confirm("请选择！")){
	alert("你点击了确认按钮！");
}					
else{
	alert("你点击了取消按钮！");
} */

//输入提示框
//prompt("请输入你的名字",555);		//第一个参数是说明，第二个参数是默认值
/* var box=prompt("请输入你的名字",555);
if(box!=null){
	alert(box);
} */

//print();		//打印
//find();
//open的三个参数：1：导航的URL 2:窗口名称，有命名不断刷新只会打开一个，没有则会不断打开新窗口
//open("https://www.baidu.com/","百度","width:400,height:400,top:100,left:200,location=no");

/* alert(screenLeft); 		//火狐不支持
alert(screenTop); */

/* alert(window.screenLeft); 		//火狐不支持,使用Window不会报错但也显示不出数字
alert(window.screenTop);
alert(typeof screenLeft); */

/* alert(window.screenX);		IE6不支持，火狐支持
alert(window.screenY); */

/* var leftX=typeof window.screenLeft=="number"?window.screenLeft:window.screenX;
var leftY=typeof window.screenTop=="number"?window.screenTop:window.screenY;
alert(leftX);
alert(leftY); */

/* alert(innerWidth);
alert(innerHeight);
alert(outerWidth);
alert(outerHeight); */

//alert(document.documentElement.clientWidth);

//moveTo(100,200);
//moveBy(10,10);

//定时器
//setTimeout("alert('HELLOWORLD')",2000);		//这种写法不推荐，不容易拓展，容易出错

/* function box(){
	alert("LEE");
}
setTimeout(box,2000); */

/* setTimeout(function(){
	alert("LEEE");
},2000) */

/* var box=setTimeout(function(){
	alert("LEEE");
},2000);

alert(box);

clearTimeout(box);		//取消超时调用 */

/* setInterval(function(){		//不断重复调用
	alert("LEEE");
},5000) */

/* var num=0;
var max=5;
var id = null;
function box(){
	num++;
	document.getElementById("a").innerHTML+=num;
	if(num==max){
		clearInterval(id);
		alert("世间道！");
	}
}

id=setInterval(box,1000); */

/* var num=0;
var max=5;

function box(){
	num++;
	document.getElementById("a").innerHTML+=num;
	if(num==max){
		alert("世间道！");
	}else{
		setTimeout(box,1000);
	}
}

setTimeout(box,1000); */

//alert(window.location)
//alert(document.location);
//alert(location.hash);//获取锚点
/* location.hash="#55";
alert(location.hash); */   //设置锚点并跳转到锚点

//location.href="https://www.baidu.com/";
//location.reload();
//location.reload(true);

//alert(history.length);

/* function back(){
	history.back();
}
function forward(){
	history.forward();
} */ 

/* function go(num){
	history.go(num);
} */

//alert("浏览器名称:"+navigator.appCodeName);
//alert(navigator.appName);
//alert(navigator.userAgent);		//用户代理字符串，浏览器信息
//alert(navigator.platform);			//所在系统位数
//browerdetect.js浏览器检测脚本

/* alert(navigator.plugins.length);

for(var i=0;i<navigator.plugins.length;i++){
	document.write("插件名:"+navigator.plugins[i].name+"<br/>");
	document.write("文件名:"+navigator.plugins[i].filename+"<br/>");
} */




