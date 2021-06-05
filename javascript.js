 
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
	 
	 $('body').css({ 
		'height': height
	});
	if(newscroll > oldscroll)
	{
		
		x = x + 10;
		$("#im").css({
			'transform':'rotate(' + x + 'deg)'
		});
	///color
		$('body').css({
		'background-color':'rgb(' + r + ',' + g + ',' + b + ')'
		});
		if(r < 255)
			r++;
		else if(g < 255)
			g++;
		else
			b++;
	}

	else
	{
		x = x - 10;
		$("#im").css({
			'transform':'rotate(' + x + 'deg)'
		});
		$('body').css({
			'background-color':'rgb(' + r + ',' + g + ',' + b + ')'
		});
		 if(r == 255)
		 	{if(g == 255)
			 	b--;
				else
				g--;
			}
			else
				r--;
	}
	oldscroll = newscroll;

	
}

document.getElementById('b').onscroll = function() { ff()} ;
 



////////////////////
////////////////////
/////  jQuery  /////
////////////////////
////////////////////
 