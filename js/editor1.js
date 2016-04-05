$(function(){

var kTailles = {
	'x-small'		:  8,
	'small'			: 11,
	'regular'		: 16,
	'large'			: 24,
	'x-large'		: 48
};

// Initialize
$('#editor-modal').modal({
	backdrop: 	'static',
	keyboard: 	false,
	show: 		false
});

// Register events
$('#editor-btn-bold').click(function(e){
	$('#editor-textarea')
		.selection( 'insert', {text: '[Gras]', mode: 'before'} )
		.selection( 'insert', {text: '[/Gras]', mode: 'after'} );
});

$('#editor-btn-italic').click(function(e){
	$('#editor-textarea')
		.selection( 'insert', {text: '[italique]', mode: 'before'} )
		.selection( 'insert', {text: '[/italique]', mode: 'after'} );
});

$('#editor-btn-underline').click(function(e){
	$('#editor-textarea')
		.selection( 'insert', {text: '[Surligne]', mode: 'before'} )
		.selection( 'insert', {text: '[/Surligne]', mode: 'after'} );
});




$('#editor-toggle').click(function(){
	$('#editor-modal').modal('show');
});

});
