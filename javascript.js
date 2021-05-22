 
function ff()
{
	
 
	if( this.oldscroll > this.scrollY )
  		 document.getElementById('im').width = document.getElementById('im').width - 10; 
  	else
  		 document.getElementById('im').width = document.getElementById('im').width + 10; 
  	this.oldscroll = this.scrollY;
}

document.getElementById('b').onscroll = function() { ff()} ;

