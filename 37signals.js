
$(document).ready(function(){
	
	$(".Basecamp").on("mouseenter", function(){
		$('.default-head').hide();
		$('.basecamp-head').show();
		$(this).find(".left-arrow").show();
	});
		
	$(".Basecamp").on("mouseleave", function(){
		$('.basecamp-head').hide();
		$('.default-head').show();
		$(this).find(".left-arrow").hide();
	});
	
	
	$(".Highrise").on("mouseenter", function(){
		$('.default-head').hide();
		$('.highrise-head').show();
		$(this).find(".left-arrow").show();
	});	
	$(".Highrise").on("mouseleave", function(){
		$('.highrise-head').hide();
		$('.default-head').show();
		$(this).find(".left-arrow").hide();
	});
	
	
	$(".Campfire").on("mouseenter", function(){
		$('.default-head').hide();
		$('.campfire-head').show();
		$(this).find(".right-arrow").show();
	});
		
	$(".Campfire").on("mouseleave", function(){
		$('.campfire-head').hide();
		$('.default-head').show();
		$(this).find(".right-arrow").hide();
	});
	

});
