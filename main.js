var sliderMain = function() {
		
    $('#slide-show .flexslider').flexslider({
      animation: "fade",
      slideshowSpeed: 5000,
      directionNav: true,
      start: function(){
          setTimeout(function(){
              $('.slider-text').removeClass('animated fadeInUp');
              $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
          }, 500);
      },
      before: function(){
          setTimeout(function(){
              $('.slider-text').removeClass('animated fadeInUp');
              $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
          }, 500);
      }

    });