 
var oldscroll = 0;
var newscroll = 0;
var r = 0;
var g = 0;
var b = 0;	
var x = 100;
var height = 1000;
function ff()
{
	newscroll = window.scrollY;
	if(oldscroll < newscroll)
		height = height + newscroll - oldscroll;
	else
	{
	 
	}
	 $('body').css({ 
		'height': height
	});
	if(newscroll > oldscroll)
	{
	x = x + 10;
	$("#im").css({
		'transform':'rotate(' + x + 'deg)'
	});
	}
	else
	{
		x = x - 10;
		$("#im").css({
			'transform':'rotate(' + x + 'deg)'
		});
	}
	oldscroll = newscroll;

}

document.getElementById('b').onscroll = function() { ff()} ;
 



////////////////////
////////////////////
/////  jQuery  /////
////////////////////
////////////////////
 