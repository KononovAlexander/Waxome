$(document).ready(function(){
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		autoplaySpeed: 3000,
		speed:800,
		arrows: true,
		prevArrow: '<div class="home__Arr home__Arr--left"><svg><use    xlink:href="#leftArr"></use></svg></div>',
        nextArrow: '<div class="home__Arr home__Arr--right"><svg><use    xlink:href="#rightArr"></use></svg></div>',
        dots: true,
		autoplay: true,
		responsive: [
			{
		breakpoint:824,
		settings:{
			dots:false
		  }
		},
		{
		breakpoint:420,
		settings:{
			arrows: false,
			dots: true
			}
		}
		]
	});
	$('.litle-slider').slick({
		infinite: true,
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 3000,
		speed:800,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: ' <div class="posts__arr posts__arr--left"><svg><use xlink:href="#littleLeft"></use></svg></div>',
		nextArrow: '<div class="posts__arr posts__arr--right">	<svg><use xlink:href="#littleRight"></use></svg></div>',
		responsive: [
			{
		breakpoint:641,
		settings:{
			slidesToShow: 2,
		}
		},
		{
		breakpoint:420,
		settings:{
			slidesToShow:1
		}
		}
		]
	});
	        // landing__scroll
			$('.scroll a[href^="#"]').click( function(){
				var scroll_el = $(this).attr('href');
				if ($(scroll_el).length != 0) {
					$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 800);
					// $('html, body').animate({ scrollBottom: $(scroll_el).offset().bottom }, 800);
				}
				return false;
			});
});
function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	testWebP(function (support) {
	
	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});