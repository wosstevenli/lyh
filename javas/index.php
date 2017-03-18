<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>javascript</title>
</head>

<body>
<!--输出文字-->
<script>
/*document.write("<h1>This is a heading</h1>");
document.write("<p>This is a paragraph.</p>");*/
document.write("This is a heading");
document.write("this is javascript text!");
</script>
<!--替换文字-->
<button type="button" onClick="alert('huanyingguanglin')">dianwop</button>
<p id="ppp1">第一段话什么的来着</p>
<p id="ppp2">第er段话什么的来着</p>
<script>
function myfirstjavascript(){
	x=document.getElementById("ppp1");
	x.innerHTML="adhsaklsfaskldf";
	}
</script>
<button type="button" onClick="myfirstjavascript()">Ecchange</button>
<!--切换图片-->
<script>
function changeImage()
{
element=document.getElementById('myimage')
if (element.src.match("bulbon"))
  {
  element.src="images/eg_bulboff.gif";
  }
else
  {
  element.src="images/eg_bulbon.gif";
  }
}
</script>

<img id="myimage" onclick="changeImage()" src="images/eg_bulboff.gif">

<p>点击灯泡来点亮或熄灭这盏灯</p>
<!--点灯切换图片-->
<script>
function changeImage2()
{
element=document.getElementById('myimage2')
if (element.src.match("bulbon"))
  {
  element.src="images/eg_bulboff.gif";
  }
else
  {
  element.src="images/eg_bulbon.gif";
  }
  x=document.getElementById("deng");
	x.innerHTML="关灯";
}
</script>

<img id="myimage2" onclick="changeImage2()" src="images/eg_bulboff.gif">

<p id="deng">开灯</p>
<!--改变样式-->
<h1>我的第一段 JavaScript</h1>
<p id="yangshi">JavaScript 能改变 HTML 元素的样式。</p>
<script>
function myFunctionys()
{
x=document.getElementById("yangshi") // 找到元素
x.style.color="#ff0000";          // 改变样式
}
</script>
<button type="button" onclick="myFunctionys()">改变样式</button>

<!--验证-->
<input id="yanzhen" type="text">

<script>
function myFunction()
{
var x=document.getElementById("yanzhen").value;
if(x==""||isNaN(x))
	{
	alert("Not Numeric");
	}
}
</script>

<button type="button" onclick="myFunction()">验证输入</button>
</body>
</html>