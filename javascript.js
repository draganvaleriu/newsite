 
var oldscroll = 0;
var newscroll = 0;
var r = 0;
var g = 0;
var b = 0;	
var x = 100;
var height = 1000;
var rr = Math.floor(Math.random())
var bb = Math.floor(Math.random());
var gg = Math.floor(Math.random());
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
		'background-color':'rgb(' + rr + ',' + gg + ',' + bb + ')'
		});
	 
	}

	else
	{
		x = x - 10;
		$("#im").css({
			'transform':'rotate(' + x + 'deg)'
		});
		$('body').css({
			'background-color':'rgb(' + rr + ',' + gg + ',' + bb + ')'
		});
		 
	}
	oldscroll = newscroll;
	if(rr > 10 && rr < 245)
	{
		rr = Math.floor(Math.random()*(rr+ 10) + (rr - 10));
		console.log( "unu",rr);
	}
	else if(rr <= 10)
	{
		rr = Math.floor(Math.random()*(rr+ 10) + rr);
		console.log("doi",rr);
	}
	else if(rr >= 245)
	{
		rr = Math.floor(Math.random()*(245) + 1);
		console.log("trei",rr);
	}
	if(gg > 10 && gg < 245)
		gg = Math.floor(Math.random()*(gg+ 10) + gg- 10);
	else if(rr <= 10)
		gg = Math.floor(Math.random()*(gg+ 10) + gg);
	else if(gg >= 245)
		gg = Math.floor(Math.random()*(245) + 1);
	if(bb > 10 && bb < 245)
		bb = Math.floor(Math.random()*(245) + 1);
	else if(bb <= 10)
		bb = Math.floor(Math.random()*(bb+ 10) + bb);
	else if(bb >= 245)
		bb = Math.floor(Math.random()*(230) + 1);
		
}

document.getElementById('b').onscroll = function() { ff()} ;
 



////////////////////
////////////////////
/////  jQuery  /////
////////////////////
////////////////////
 