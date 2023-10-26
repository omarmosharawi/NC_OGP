
jQuery(function($){
	$('.actions > a:nth-child(1)').each(function() {
	$(this).addClass('yellow-btn'); 
	});
	
	$( ".actions" ).each(function( index ) {
$( this ).find( "a:eq(1)" ).addClass('red-btn'); 
});

	$('.actions > a').each(function() {
	$(this).addClass('mini-btn');
	this.textContent = this.textContent.replace(/]|\[/g, ""); 
	});

	$('.actions > br').each(function() {
	$(this).remove();
	});
})