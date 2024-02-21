$(document).ready(function () {
	$('.portfolio__boxes').slick({
		arrows: true,
		centerPadding: '60px',
		slidesToShow: 2,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: true,
		pauseOnFocus: false,
		prevArrow: '<button type="button" class="slick-custom-arrow slick-prev"> <i class="fa-solid fa-chevron-left"></i> </button>',
		nextArrow: '<button type="button" class="slick-custom-arrow slick-next"> <i class="fa-solid fa-chevron-right"></i> </button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1,
				},
			},
		],
	})
})
