/*** HIGHLY Versatile and Lightweight Hover tip 
	 By: Michael Otte - February 20, 2013  ***/

$(document).ready(function() {
	/* this adds tips */
	$('.tipit').hover(function(){
		var specific_tag = "#"+this.id+"_tip";
		$(specific_tag).stop(true,true).fadeToggle();
	}).mousemove(function(e){
		var specific_tag = "#"+this.id+"_tip";
		var tipwidth = $(specific_tag).css('width').replace(/\D/g,'');
		var leftit = e.pageX;
		var topit = e.pageY+15;
	   	$('.tip').offset({left: leftit, top: topit});
	});
	
});
