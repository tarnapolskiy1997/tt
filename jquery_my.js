$(document).ready(function(){
$('.inline_class').on('click', function(){
$( ".first_navigation_ul" ).slideToggle();
});
$('.element_frig').on('click', function(){
$(this).find( ".hover_txt" ).slideToggle();
});
});


