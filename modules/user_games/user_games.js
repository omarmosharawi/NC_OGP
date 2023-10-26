
jQuery(function($){
	$('tr > td:last-child > a:nth-child(1)').each(function() {
	$(this).addClass('red-btn'); 
	});
	
	$( "tr > td:last-child" ).each(function( index ) {
$( this ).find( "a:eq(1)" ).addClass('yellow-btn'); 
});

	$('tr > td > a').each(function() {
	$(this).addClass('mini-btn'); 
	this.textContent = this.textContent.replace(/]|\[/g, ""); 
	});
	$('tr > td > div').each(function() {
	this.textContent = this.textContent.replace(/]|\[/g, ""); 
	});
})