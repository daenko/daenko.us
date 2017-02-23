$(document).ready(function() {

	
	$('.glass').click(function(){
    
		if ($(this).parent().is('.open')) {
			$(this).closest('.box').find('.review_container').animate({'height':'0'},500);			
			$(this).closest('.box').removeClass('open');
           
		} else {
			var newHeight = $(this).closest('.box').find('.review').height() + 'px';
			$(this).closest('.box').find('.review_container').animate({'height':newHeight},500);			
			$(this).closest('.box').addClass('open');
            
		}
	});
	
$('.nav-toggle').click(function(){
        var toggle_switch = $(this);
		if ($(this).parent().is('.open')) {
			$(this).closest('.box').find('.review_container').animate({'height':'0'},500);			
			$(this).closest('.box').removeClass('open');
            toggle_switch.html('Read more');
		} else {
			var newHeight = $(this).closest('.box').find('.review').height() + 'px';
			$(this).closest('.box').find('.review_container').animate({'height':newHeight},500);			
			$(this).closest('.box').addClass('open');
            toggle_switch.html('Hide');
            
		}
	});
	  
  			
});


