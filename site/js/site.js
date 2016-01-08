// Header Animations

$(window).bind("load", function() {
	
$(".header_device_loading_icon").fadeOut(400);
$(".header_device img").delay(300).fadeIn(400);

$(".section_one_device .device_loading_icon, .section_two_device .device_loading_icon").fadeOut(400);
$(".section_one_device img, .section_two_device img").delay(300).fadeIn(400);

});