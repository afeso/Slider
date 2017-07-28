var sliderInt = 1;
var sliderNext = 2;
//var count = $('#slider').find('img').size();
var $slider = $('#slider').find('img') //finds the image in the slider div


$(document).ready(function() {
		
	$('#slider').find('#1').fadeIn('slow');
	startSlider();
});

function startSlider() {
	count = $slider.size(); // make count a global variable
	
	loop = setInterval(function() {
		
		if(sliderNext > count) {
				sliderNext = 1;
				sliderInt = 1;			
		}
		
		$slider.fadeOut('slow');
		$('#slider').find('img#' + sliderNext).fadeIn('slow')
		
		sliderInt =  sliderNext;
		sliderNext += 1;
		
		
	}, 3000);
	
}

function prev() {
	newSlide = sliderInt - 1;
	showSlide(newSlide);
}

function next() {
	newSlide = sliderInt + 1;
	showSlide(newSlide);
}

function stopLoop() {
	window.clearInterval(loop);
}

function showSlide(id) {
	stopLoop();
	if(id > count) {
		id = 1;
	}else if(id < 1) {
		id = count;
	}
		
	$slider.fadeOut('slow');
	$('#slider').find('img#' + id).fadeIn('slow')
		
	sliderInt = id;
	sliderNext = id + 1;
	startSlider();
		
}

$slider.hover(
	function() {
		stopLoop();
	},
	function() {
		startSlider();
	}
	
);