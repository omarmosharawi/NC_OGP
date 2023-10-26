jQuery(function($){
	$( "table:eq(1) > tbody > tr" ).each(function( index ) {
$( this ).find( "td:eq(-1) > a" ).addClass('mini-btn');
$( this ).find( "td:eq(-1) > a" ).addClass('yellow-btn');
});

	$( "table:eq(-1) > tbody > tr" ).each(function( index ) {
$( this ).find( "td:eq(-1) > a" ).addClass('mini-btn');
});
})