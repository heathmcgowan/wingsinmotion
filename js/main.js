$(document).ready(function(){

	// Newsletter scroll
	$(document).on('click', 'a[href^="#newsletter"]', function (event) {
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 500);
	     $('input#mce-EMAIL').focus();
	});

	// Mobile Nav
	$('.hamburger').click(function(){
		$('.mobile-nav').toggleClass('off-screen');
	});

	// To top
	$('.to-top, .to-top-image').on("click",function(){
	      $("HTML, BODY").animate({ scrollTop: 0 }, 500);
	});

});


// MailChimp
$(document).ready(function(){
	  	(function($) {
   		window.fnames = new Array(); 
	   	window.ftypes = new Array();
	   	fnames[0]= 'EMAIL';ftypes[0]='email'; 
	   	fnames[1]='FNAME';ftypes[1]='text';  
	   	fnames[2]='LNAME';ftypes[2]='text';
  	}());
	  	var $mcj = $.noConflict(true);	
});

