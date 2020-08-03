var numsquares=6;
var colors=generaterandomcolor(numsquares);
var square=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var displaycolor=document.getElementById("displaycolor");
var h1=document.querySelector("h1");
displaycolor.textContent=pickedcolor;
var message=document.getElementById("message");
var button1=document.getElementById("button1");
var button2=document.getElementById("button2");
var button3=document.getElementById("button3");
button2.addEventListener("click",function(){
	button2.classList.add("selected");
	button3.classList.remove("selected");
	numsquares=3;
	colors=generaterandomcolor(numsquares);
	pickedcolor=pickcolor();
	displaycolor.textContent=pickedcolor;
	for(var i=0;i<square.length;i++)
	{
		if(colors[i])
			square[i].style.backgroundColor=colors[i];
		else
			square[i].style.display="none";
	}
});
button3.addEventListener("click",function(){
	button3.classList.add("selected");
	button2.classList.remove("selected");
	message.textContent="";
	numsquares=6;
	colors=generaterandomcolor(numsquares);
	pickedcolor=pickcolor();
	displaycolor.textContent=pickedcolor;
	for(var i=0;i<square.length;i++)
	{
			square[i].style.backgroundColor=colors[i];
		
			square[i].style.display="block";
	}
});
button1.addEventListener("click",function(){
	colors=generaterandomcolor(numsquares);
	pickedcolor=pickcolor();
	displaycolor.textContent=pickedcolor;
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	this.textContent="New Colors";
	message.textContent="";
})
for(var i=0;i<square.length;i++){
	button1.textContent="New Colors";
	square[i].style.backgroundColor=colors[i];
	square[i].addEventListener("click",function(){
		var clickedcolor = this.style.backgroundColor;
		if(clickedcolor === pickedcolor)
		{
			changecolors(clickedcolor);
			h1.style.backgroundColor=clickedcolor;
			message.textContent="Correct";
			button1.textContent="Play again?";
		}
		else
		{
			this.style.backgroundColor="#232323";
			message.textContent="Wrong";
		}
	});
}
function  changecolors(color)
{
	for(var j=0;j<square.length;j++)
	{
		square[j].style.background=color;
	}
}
function pickcolor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generaterandomcolor(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomcolor());
	}
	return arr;
}
function randomcolor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}