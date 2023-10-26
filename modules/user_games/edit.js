
jQuery(function($){
	
$( "a[href*='delete_ip']" ).each(function( index ) {
	$(this).addClass('mini-btn'); 
$( this ).addClass('red-btn'); 
this.textContent = this.textContent.replace(/]|\[/g, "");
});
})
