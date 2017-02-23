$(document).ready(function() {
	var $image = $('.image');
    $image.find('a').on('mouseenter', function(e){
		e.preventDefault();
		 $(this).children('.info').slideDown('slow');

       //$image1.find(':hidden').show(2000);
	});
    $image.find('a').on('mouseleave', function(e){
		e.preventDefault();
		 //$(this).children('.info').fadeToggle('slow');
		$(this).children('.info').slideUp('slow');
	});
	
});
