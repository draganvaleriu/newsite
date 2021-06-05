 
var oldscroll = 0;
var ScrollY = 0;
var r = 0;
var g = 0;
var b = 0;
function ff()
{

 	var elem =  document.getElementById('im');
	if(oldscroll > ScrollY )
	{
  		elem.width = document.getElementById('im').width - (oldscroll - ScrollY)/10; 
		 
	}
  	else
  	{
  		elem.width = document.getElementById('im').width + (ScrollY - oldscroll)/10; 
  	}
  	oldscroll = ScrollY;
  	var c = document.getElementById('b');
  	ScrollY = window.scrollY;
  	c.backgroundColor = 'red';
}

document.getElementById('b').onscroll = function() { ff()} ;
function func()
{
	var elem = document.getElementById('im');
	var elem1 = document.getElementById('b');
	if(!elem.classList.contains('unu'))
	{
		elem1.classList.add("bb");
		elem.classList.add("unu");
	
	}
	else
	{
		elem.classList.remove("unu");
		elem1.classList.remove("bb");
	}
}




////////////////////
////////////////////
/////  jQuery  /////
////////////////////
////////////////////
$("img").hide('slow/400', function() {
	
});