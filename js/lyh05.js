/* function box(a,b){
	return a+b;
}

function sum(c,d){
	return box.apply(this,[c,d]);  //apply和call可以冒充另外一个函数
}								   //this表示window作用域，[]表示传递的参数

function sum2(c,d){
	return box.apply(this,arguments);  //arguments可以当数组传递
}

alert(sum(10,10));
alert(sum2(20,18)); */

/* function box(a,b){
	return a+b;
}

function sum(c,d){
	return box.call(this,c,d);
}

alert(sum(10,10));
alert(sum2(20,18)); */

/*apply call跨作用域*/
/* var color="红色";
var box={
	color:"蓝色"
}

function saycolor(){
	alert(this.color);
}

//saycolor();
saycolor.call(window);
saycolor.call(this);
saycolor.call(box);		//冒充box，作用域就在box对象里面   apply后面需要传递参数，在此call比apply方便 */

/* var box=new Object();
box.name="Lee";		//添加一个属性
alert(box.name); */

/* var box="lee";		//基本类型值，是字符串
box.age=28;			//基本类型值添加爱属性
alert(box.age);		//不是引用类型，无法输出 */

/* var box="lee";
var box2=box;
box2="KKKK";		//基本类型保持独立，不会影响
alert(box);
alert(box2); */

/* var box=new Object();
box.name="lee";
var box2=box;
box2.name="KKKKKK";			//栈内存指向堆内存，box2.name改变了堆内存的东西，故box指向的相同的堆内存的东西发生改变
alert(box2.name);
alert(box.name); */

/* function box(a){
	a+=10;
	return a;
}

var a=50;
alert(box(a));
alert(a);		//如果是按引用传递，那么函数里的a会成为；类似全局变量 */

/* var box=[1,2,3];    //在判断对象上typeof就显得有限，数组，对象，正则都是对象
alert(typeof box);
var box1={};
alert(typeof box1);
var box2=/g/;
alert(typeof box2); */

/* var box=[1,2,3];    //在判断对象上用instanceof+类型来判断对象属于哪种对象
alert(box instanceof Array);
var box1={};
alert(box1 instanceof Object);
var box2=/g/;
alert(box2 instanceof RegExp); */

/* var box="LEE";   			//instanceof不能用于判断基础类型上
alert(typeof box);   
alert(box instanceof String); */

/* var box=new String("LEE");   			//instanceof不能用于判断基础类型上
alert(typeof box);   
alert(box instanceof String); */

/* var box="LEE";
function setBOX(){
	return 123;
}
alert(box);
alert(setBOX()); */

/* var box="LEE";    	//	全局变量，最外围属于Window属性
function setBOX(){	//全局函数，最外围，属于Window方法
	return 123;
}
alert(window.box);
alert(window.setBOX()); */

/* var box="LEE";    	
function setBOX(){	
	function setcolor(){
		return 456;
	}
	return 123;
}
alert(window.box);
alert(window.setBOX());
alert(window.setcolor());  		//setcolor不属于全局函数，无法全局输出 */

/* var box="LEE";
function setbox(){		//	方法
	var box="RED";		//	此时的box魏setbox内的局部变量
}
setbox();				//	执行方法函数
alert(box); */

/* var box="LEE";
function setbox(){		
	box="RED";		//将RED赋值给全局变量box
}
setbox();				
alert(box); */

/* var box="LEE";   		//传递参数也是局部
function setbox(a){
	alert(a);
}
setbox("RED");				
alert(box); */

/* var box="LEE";
function setbox(box){		////传递参数也是局部不影响全局
	alert(box);
}
setbox("RED");				
alert(box); */

/* var box="LEE";
function setbox(){
	function setcolor(){		//setcolor()作用域在setbox内
		return 456;
	}
	return 123;
}
alert(setbox());
alert(setcolor());			//setcolor()在外部是访问不到的 */

/* var box="LEE";
function setbox(){
	function setcolor(){		//setcolor()作用域在setbox内
		return 456;
	}
	return setcolor();
}
alert(setbox());		//通过setbox返回setcolor()从而输出setcolor() */

/* var box="LEE";
function setbox(){
	function setcolor(){		
		var b="KKK";		//var b的作用域在setcolor()内部，故在setcolor()以外无法调用
		return 456;
	}
	alert(b);
	return setcolor();
}
alert(setbox()); */

/* var box="LEE";
function setbox(){
	function setcolor(){		
		var b="KKK";		//var b的作用域在setcolor()内部，故在setcolor()以外无法调用
		alert(b);
		return 456;
	}
	return setcolor();
}
alert(setbox()); */

/* if(true){			//if语句的{}没有作用域的功能
	var box="LEE";
}
alert(box);
alert(window.box); */

/* for(var i=0;i<=10;i++){
	var box="LEE";
}
alert(i);
alert(box); */

/* function box(){
	num=10;			//有var表示在函数体内声明变量，就是局部变量，去掉var表示全局变量 
	//var num=10;
}
box();
alert(num); */

/* var box="LEE";
function setbox(){
	return box;
}
alert(setbox()); */

/* var box="LEE";
function setbox(){
	var box="RED";
	return box;
}
alert(setbox());		//两处的box是不同的东西
alert(box); */

//基本类型string 布尔值 number  引用类型 object {} /[]/正则
/* var box="LEE";
alert(box);
alert(typeof box); */

/* var box="123456789";
alert(box.substring(2));		//对象.方法（参数）这种写法明显是引用类型的写法
								//索引从0开始，此处表示从第二个位置开始截取到末尾字符串输出 */
								
/* var box="Mr.LI";		//基本类型  自变量写法
box.name="LI";			//给基本类型加属性
box.age=function(){		//给基本类型加方法
	return 100;
};
alert(box);
alert(typeof box);
alert(box.name);		//undefined,打印不出
alert(box.age());		//出错
						//基本类型是无法给自己创建属性和方法
						//只能调用系统内置方法 */
						
/* var box=new String("Mr.LI");		//引用类型，string的引用类型
box.name="LI";			
box.age=function(){		
	return 100;
};
alert(box);
alert(typeof box);
alert(box.name);		
alert(box.age());		 */		

/* var box="Mr.LI";
alert(box.length);		//属性不需要加()，加()就是方法了	 */	

/* var box="Mr.LI";
alert(box.constructor);		//返回函数方法 */

/* var box="Mr.LI";
alert(box.charAt(3));		//返回指定下标的值 */

/* var box="Mr.LI";
alert(box.charCodeAt(3));		//返回指定下标的acssii码
alert(box[1]);					//返回指定下标字符 */

/* var box="Mr.LI";
alert(box.charCodeAt(3));		//返回指定下标的acssii码
alert(box[1]);					//返回指定下标字符
alert(box.concat(" is ","DESIGNER ","!"));	//参数字符串连接 */

/* var box="Mr.LIasdfghjkl";
alert(box.slice(5,8));					//返回位置5-8位置见的字符串 */

/* var box="Mr.LIE";
alert(box.substring(4,6)); */

/* var box="Mr.lee";
alert(box.substr(4,2));		//从第4位开始选2个输出 */

/* var box="Mr.Lee";
alert(box.slice(4));		//只有一个参数表示从第几位开始一直截取到最后
alert(box.substr(4)); */

/* var box="Mr.Lee";			//不论负数前后都按照负数的计算方式计算
alert(box.slice(-2));
alert(box.slice(4));		//负数表示先求出字符串的长度6+（-2）=4开始截取
alert(box.substr(-2));
alert(box.substring(-2));	//负数时返回全部字符串 */

/* var box="Mr.lee is lishuang";
alert(box.indexOf("l"));		//返回从初始位置搜索l的位置
alert(box.lastIndexOf("l"));	//返回最后一个l的位置
alert(box.indexOf("l",5));		//从第5个位置开始搜索L出现第一次出现的位置
alert(box.lastIndexOf("l",5));	//从第5个位置开始向前搜索L第一次出现的位置 */

/* var box="Mr.lee is lishuang list";	//找出所有的l
var boxarr=[];
var pos=box.indexOf("l");
while(pos>-1){
	boxarr.push(pos);
	pos=box.indexOf("l",pos+1);
}
alert(boxarr); */

/* var box="Mr.lee is lishuang list";
alert(box.toLowerCase());
alert(box.toUpperCase());
alert(box.toLocaleLowerCase());
alert(box.toLocaleUpperCase()); */

//方法就是函数，函数将是方法，面向对象的时候叫方法
/* var box="//lee李";
//alert(box);
alert(encodeURI(box));		//只转换了中文字符
alert(encodeURIComponent(box));	//全部编码
 */
 
/* var box="//lee李";
//alert(box);
var a=encodeURI(box);		//encode编码，decode解码
var b=encodeURIComponent(box);
alert(a);
alert(decodeURI(a));
alert(b);
alert(decodeURIComponent(b));
 */
 
/*  "var box=100"		//只是字符串无法输出
 alert(box); */

/*  eval("var box=100");
 alert(box); */
 
/* alert(eval("alert(100)")); */

/* eval("function box(){return 123}");
alert(box()); */

/* eval("function box(){   //此方法不可以换行
	return 123
	}");
alert(box()); */
/* alert(Math.E);
alert(Math.PI);	
alert(Math.min(1,2,3,4,5,6,7,8,9));	//求最小
alert(Math.max(1,2,3,4,5,6,7,8,9));	//求最大
alert(Math.ceil(25.1));  			//向上舍入
alert(Math.ceil(25.5));				//向上舍入
alert(Math.ceil(25.6));				//向上舍入
alert(Math.ceil(25.9));				//向上舍入 */

/* alert(Math.floor(25.1));  			//向下舍入
alert(Math.floor(25.5));				
alert(Math.floor(25.6));				
alert(Math.floor(25.9));	 */

/* alert(Math.round(25.1));  			//标准舍入四舍五入
alert(Math.round(25.5));				
alert(Math.round(25.6));				
alert(Math.round(25.9)); */

//alert(Math.random());  			//随机舍入0-1之间不包含0，1

/* for(var i=0;i<10;i++){
	document.write(Math.random());
	document.write('<br/>');
} */

/* for(var i=0;i<10;i++){				//1-10之间
	document.write(Math.floor(Math.random()*10+1));
	document.write('<br/>');
} */

/* for(var i=0;i<10;i++){				//5-10之间
	document.write(Math.floor(Math.random()*6+5));
	document.write('<br/>');
} */

/* function suiji(star,end){
	var total=end-star+1;
	return Math.floor(Math.random()*total+star);
}
for(var i=0;i<10;i++){
	document.write(suiji(5,10));
	document.write("<br/>");
} */

//方法就是函数，只是在一定的作用域下称为方法
//alert(Math.abs(-5));

/* var box=new Object();		//第一步创建对象
box.name="LEE";				//给对象添加属性
box.age=100;				//给对象添加属性
box.run=function(){
	return this.name+this.age+"运行ING...";		//this表示当前作用域下的对象
}												//this要放置于作用域下，不可用在全局，比如box.run(){}作用域下
alert(box.run());
var name="LLLLL";
alert(this.name);		//此处的this处于最外层代表Window */

/* var box=new Object();
box.name="LEE";
box.age=100;
box.run=function(){
	return this.name+this.age+"运行ING...";
}
alert(box.run());

var box2=new Object();
box2.name="SADF";
box2.age=200;
box2.run=function(){
	return this.name+this.age+"FUCKKKKKKK...";
}
alert(box2.run());
alert(box.run()+box2.run()); */

//工厂模式
/* function creatObject(name,age){
	var obj=new Object();	//创建对象
	obj.name=name;			//添加属性
	obj.age=age;
	obj.run=function(){		//添加方法
		return this.name+this.age+"正常显示中..."
	};
	return obj;				//返回对象引用
}

var box1=creatObject("李雷",60);	//创建第一个对象
var box2=creatObject("韩梅梅",50);	//创建第二个对象
alert(box1.run());					
alert(box2.run()); */

/* function creatObject(name,age){
	var obj=new Object();	//创建对象
	obj.name=name;			//添加属性
	obj.age=age;
	obj.run=function(){		//添加方法
		return this.name+this.age+"正常显示中..."
	};
	return obj;				//返回对象引用
}

function creatObject2(name,age){
	var obj=new Object();
	obj.name=name;
	obj.age=age;
	obj.run=function(){
		return this.name+this.age+"正常显示中..."
	};
	return obj;
}

var box1=creatObject("李雷",60);
var box2=creatObject("韩梅梅",50);
var box3=creatObject2("非官方",80);		//工厂模式的缺点是无法分清对象是哪个方法创建的
alert(box1.run());					
alert(box2.run());
alert(box3.run()); */

//构造函数 创建对象
/* function box(name,age){		//创建一个对象 说是要求box第一个字母大写，好像小写也没什么关系
	this.name=name;			//this.name中的name是属性，=name是传过来的参数
	this.age=age;
	this.run=function(){
		return this.name+this.age+"正常运行...";
	};
}
var box1=new box("张国华",100);		//实例化
var box2=new box("阿斯大法",200);
alert(box1.run());
alert(box2.run()); */


/* function box(name,age){		//创建一个对象 说是要求box第一个字母大写，好像小写也没什么关系
	this.name=name;			//this.name中的name是属性，=name是传过来的参数
	this.age=age;
	this.run=function(){
		return this.name+this.age+"正常运行...";
	};
}

function Sox(name,age){
	this.name=name;
	this.age=age;
	this.run=function(){
		return this.name+this.age+"正常运行...";
	};
}

var box1=new box("张国华",100);		//实例化
var box2=new box("阿斯大法",200);
var box3=new Sox("阿斯顿飞",300);
alert(box1.run());
alert(box2.run());
alert(box2 instanceof box);
alert(box3.run());
alert(box3 instanceof box);
alert(box3 instanceof Sox);			//可以区分从哪个方法创建 */

/* function Sox(name,age){
	this.name=name;
	this.age=age;
	this.run=function(){
		return this.name+this.age+"正常运行...";
	};
}

var box1=new Sox("张国华",100);		//实例化

alert(box1.run());

alert(this.name);	
 */
 
/*  function Sox(name,age){
	this.name=name;
	this.age=age;
	this.run=function(){
		return this.name+this.age+"正常运行...";
	};
}

var box1=new Object();
Sox.call(box1,"LEEE",100);   //对象冒充
alert(box1.run()); */

/* function Sox(name,age){
	this.name=name;
	this.age=age;
	this.run=function(){
		return this.name+this.age+"正常运行...";
	};
} */

/* var box1=new Sox("张国华",100);
var box2=new Sox("金鹰",250); */
/* var box1=new Sox("张国华",100);//实例化后地址为1
var box2=new Sox("张国华",100);//实例化后地址为2
alert(box1.run()==box2.run());	
alert(box1.run);
alert(box2.run);
alert(box1.run==box2.run);  //因为他们比较的是引用地址 */

//原型
/* function Box(){}	//构造函数函数体内什么也没有，原型函数里有实例属性，实例方法
Box.prototype.name="LEE";
Box.prototype.age=288;
Box.prototype.run=function(){
	return this.name+this.age+"正常显示中...";
};
var box1=new Box();
var box2=new Box();
alert(box2.name);
alert(box1.run());
alert(box1.run==box2.run); */

/* function Box(){}	

var box1=new Box();
var box2=new Box();
//alert(box.prototype);
//alert(box._proto_);
alert(Box.prototype); */

/* function Box(){}	
//使用字面量的方式创建原型对象，这里的{}就是对象是object，new Object就相当于{}
Box.prototype={
	name:"Lee",
	age:100,
	run:function(){
		return this.name+this.age+"正常运行..."
	}
};
var box1=new Box();
alert(box1.run()); */

/* function Box(){}
Box.prototype.name="LEE";
Box.prototype.age=288;
Box.prototype.run=function(){
	return this.name+this.age+"正常显示中...";
};
var box=new Box();
alert(box.constructor); */

/* function Box(){}	
//使用字面量的方式创建原型对象，这里的{}就是对象是object，new Object就相当于{}
Box.prototype={
	name:"Lee",
	age:100,
	run:function(){
		return this.name+this.age+"正常运行..."
	}
};
var box1=new Box();
alert(box1.constructor);  */

/* //组合构造函数+原型模式
function Box(name,age){   	//保持独立的用构造函数
	this.name=name;
	this.age=age;
	this.family=["哥哥","姐姐","弟弟"];
}
Box.prototype={				//保持共享的用原型
	constructor:Box,
	run:function(){
		return this.name+this.age+"正常显示..."
	}
};

var box1=new Box("阿斯顿飞",254);
alert(box1.run());

var box2=new Box("撒旦发",6545);
alert(box2.run()); */

/* //动态原型模式
//可以将原型封装到构造函数里
function Box(name,age){
	this.name=name;
	this.age=age;
	this.family=["哥哥","姐姐","弟弟"];
	Box.prototype.run=function(){   		//原型初始化两次
		return this.name+this.age+"正常显示中..."
	};
}

var box1=new Box("阿斯顿飞",254);
alert(box1.run());

var box2=new Box("撒旦发",6545);
alert(box2.run()); */

//动态原型模式
//可以将原型封装到构造函数里
/* function Box(name,age){
	this.name=name;
	this.age=age;
	this.family=["哥哥","姐姐","弟弟"];
	if(typeof this.run !="function"){  		//原型初始化1次
		alert("原型初始化开始");
		Box.prototype.run=function(){
		return this.name+this.age+"正常显示中..."
	};};
}

var box1=new Box("阿斯顿飞",254);
alert(box1.run());

var box2=new Box("撒旦发",6545);
alert(box2.run()); */

//继承 通过原型链来实现
function Box(){			//被继承的函数叫超类（父类，基类）
	this.name="LEE";
}

function Desk(){		//继承的函数叫子类，派生类
	this.age=100;
}
