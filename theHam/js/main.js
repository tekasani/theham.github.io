jQuery(document).ready(function($) {
	
	var search_btn = $(".search_btn");
	var search_sect = $(".search");

	var burger_btn = $(".burger_btn");
	var nav_mobile = $(".nav_mobile");

	search_btn.click(function() {
		search_sect.toggleClass('show');
	});

	burger_btn.click(function() {
		$('.burger').toggleClass('burger_close');
		nav_mobile.toggleClass('show');
		search_sect.removeClass('show');
		$("body").toggleClass('lock');
	});

});